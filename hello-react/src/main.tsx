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

const dueitems = (
  title: string,
  dueDate: string,
  assigneeName: string
) => {
  let list: duelist = {
    title: title,
    dueDate: dueDate,
    assigneeName: assigneeName,
  };
  return list;
};

const completeditems = (
  title: string,
  completedAtDate: string,
  assigneeName: string
) => {
  let list: completedlist = {
    title: title,
    completedAtDate: completedAtDate,
    assigneeName: assigneeName,
  };
  return list;
};



export  {dueitems,completeditems};
