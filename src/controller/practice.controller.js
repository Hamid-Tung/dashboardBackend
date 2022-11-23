export const findTags = (req, res) => {
  console.log("hy in function");
  const { sampleString } = req.body;
  const newsplitedstring = sampleString.split("<");
  let newarray = [];
  let totattags = 0;
  let totalpTags = 0;
  for (let i = 1; i < newsplitedstring.length; i++) {
    if (newsplitedstring[i].split(">", 1) == "div") {
      totalpTags++;
    }
    newarray.push(newsplitedstring[i].split(">", 1));
    totattags++;
  }
  // newsplitedstring.forEach((currentvalue, index) => {
  //     if ( newsplitedstring[index].split(">",1) == 'div'){
  //         totalpTags++;
  //     }
  //     newarray.push(newsplitedstring[index].split(">",1));
  //     totattags++;
  // });
  // const mystringarray = newsplitedstring[1].split(' ')
  res.status(200).json({
    message1: newsplitedstring,
    message2: newarray,
    message3: totattags,
    TotalPTags: totalpTags,
  });
};

export const affterMiddleware = (req, res) => {
  res.status(200).json({ message: "After middleware" });
};

export const thisKeyword = (req, res) => {
  console.log(this);
  res.status(200).json({ message: "After Console" });
};

export function thiskey(req, res) {
  console.log(this);
  res.status(200).json({ message: "After Console" });
}

export const ValidationService = () => {
  //setting some settings
  this.isValid = function (first_name, last_name, age, email, phone, status) {
    //check if set that they are valid
    return trueorfalse; //can be true or false
  };
  return this;
};
