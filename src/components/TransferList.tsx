import { useState } from "react";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import Card from "@mui/material/Card";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import { ListItemButton } from "@mui/material";

function not(a: number[], b: { id: number; itemName: string }[]) {
  return a.filter((value) => b.find((i) => i.id !== value));
}

function notSelected(a: number[], b: number[]) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a: number[], b: { id: number; itemName: string }[]) {
  return a.filter((value) => b.find((i) => i.id === value));
}

const TransferList = () => {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [fruits, setFruits] = useState<{ id: number; itemName: string }[]>([
    {
      id: 1,
      itemName: "Apples",
    },
    {
      id: 2,
      itemName: "Bananas",
    },
    {
      id: 3,
      itemName: "Mangoes",
    },
    {
      id: 4,
      itemName: "Watermelons",
    },
    {
      id: 5,
      itemName: "Pineapples",
    },
  ]);
  const [veggies, setVeggies] = useState<{ id: number; itemName: string }[]>([
    {
      id: 6,
      itemName: "Potatoes",
    },
    {
      id: 7,
      itemName: "Onions",
    },
    {
      id: 8,
      itemName: "Carrots",
    },
    {
      id: 9,
      itemName: "Spinach",
    },
    {
      id: 10,
      itemName: "Pumpkins",
    },
  ]);

  const selectedFruitsLeft = intersection(selectedItems, fruits);
  const selectedVeggiesRight = intersection(selectedItems, veggies);

  const handleToggle = (value: { id: number; itemName: string }) => () => {
    const currentIndex = selectedItems.indexOf(value.id);
    const newChecked = [...selectedItems];

    if (currentIndex === -1) {
      newChecked.push(value.id);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setSelectedItems([...newChecked]);
    console.log("newChecked", newChecked);
  };

  const handleCheckedRight = () => {
    const dataInclusionRight = fruits.filter((el) =>
      selectedFruitsLeft.includes(el.id)
    );

    const dataExclusionLeft = not(selectedFruitsLeft, fruits);
    const dataExcludedFromFruits: { id: number; itemName: string }[] =
      dataExclusionLeft.length > 0
        ? fruits.filter((el) => !dataExclusionLeft.includes(el.id))
        : [];
    setVeggies(veggies.concat([...dataInclusionRight]));
    setFruits(dataExcludedFromFruits);
    setSelectedItems(notSelected(selectedItems, selectedFruitsLeft));
  };

  const handleCheckedLeft = () => {
    const dataInclusionLeft = veggies.filter((el) =>
      selectedVeggiesRight.includes(el.id)
    );
    const dataExclusionRight = not(selectedVeggiesRight, veggies);
    const dataExcludedFromVeggies: { id: number; itemName: string }[] =
      dataExclusionRight.length > 0
        ? veggies.filter((el) => !dataExclusionRight.includes(el.id))
        : [];

    setFruits(fruits.concat([...dataInclusionLeft]));
    setVeggies(dataExcludedFromVeggies);
    setSelectedItems(notSelected(selectedItems, selectedVeggiesRight));
  };
  const rightArrayContents = veggies.map((item) => {
    const temp: { itemName?: string } = {};
    temp["itemName"] = item.itemName;
    return temp;
  });
  console.log("itemName", rightArrayContents);

  const customList = (items: { id: number; itemName: string }[]) => (
    <Card>
      <List component="div" role="list">
        {items.map((item, value) => {
          const labelId = `transfer-list-all-item-${value}-label`;
          return (
            <ListItemButton
              key={value}
              role="listitem"
              onClick={handleToggle(item)}
              selected={selectedItems.indexOf(item.id) !== -1}
            >
              <ListItemText id={labelId} primary={item.itemName} />
            </ListItemButton>
          );
        })}
      </List>
    </Card>
  );
  console.log("Selected Items", selectedItems);

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item>{customList(fruits)}</Grid>
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <Button
            sx={{ my: 0.5 }}
            variant="contained"
            size="small"
            onClick={handleCheckedRight}
            disabled={selectedFruitsLeft.length === 0}
            aria-label="move selected right"
          >
            Add
          </Button>
          <Button
            sx={{ my: 0.5 }}
            variant="contained"
            size="small"
            onClick={handleCheckedLeft}
            disabled={selectedVeggiesRight.length === 0}
            aria-label="move selected left"
          >
            Remove
          </Button>
        </Grid>
      </Grid>
      <Grid item>{customList(veggies)}</Grid>
    </Grid>
  );
};

export default TransferList;
