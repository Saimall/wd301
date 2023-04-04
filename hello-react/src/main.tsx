interface duelist {
  title: string;
  dueDate: string;
  assigneeName: string;
}

interface completedlist {
  title: string;
  completedAtDate: string;
  assigneeName: string;
}

const dueitems = (title: string, dueDate: string, assigneeName: string) => {
  let duelist: duelist = {
    title: title,
    dueDate: dueDate,
    assigneeName: assigneeName,
  };
  return duelist;
};

const completeditems = (
  title: string,
  completedAtDate: string,
  assigneeName: string
) => {
  let completedlist: completedlist = {
    title: title,
    completedAtDate: completedAtDate,
    assigneeName: assigneeName,
  };
  return completedlist;
};

export { dueitems, completeditems };
