interface itemslist {
  title: string;
  dueDate: string;
  completedAtDate: string;
  assigneeName: string;
}

const items = (
  title: string,
  dueDate: string,
  completedAtDate: string,
  assigneeName: string
) => {
  let list: itemslist = {
    title: title,
    dueDate: dueDate,
    completedAtDate: completedAtDate,
    assigneeName: assigneeName,
  };
  return list;
};

export default items;
