export const generateListData = (num: number) => {
    const listDataArray = [];
    for (let i = 0; i < num; i++) {
      listDataArray.push({ image: `image ${i}`, name: `name ${i}`, count: i });
    }
    return listDataArray;
  };