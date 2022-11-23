export const checkRequestHeader = (req, res, next) => {
  console.log("Project Middleware:", req.originalUrl);

  if (req.query["x-project"]) {
    req.headers["x-project"] = req.query["x-project"];
  }

  if (!req.headers["x-project"]) {
    res
      .status(401)
      .send('{"error": true, "code": 401, "message": "Project ID missing"}');
  }

  const raw = req.headers["x-project"];

  const newsplitedstring = raw.split("<");
  let newarray = [];
  for (let i = 1; i < newsplitedstring.length; i++) {
    newarray.push(newsplitedstring[i].split(">", 1));
  }
  let number = newarray[0][0];
  let splitedDate = newarray[1][0].split("-");
  if (splitedDate[splitedDate.length - 1] % 2 === 0 && number % 2 === 0) {
    next();
  }
  if (splitedDate[splitedDate.length - 1] % 2 !== 0 && number % 2 !== 0) {
    next();
  }
  res
    .status(401)
    .send(
      '{"error": true, "code": 401, "message": "projectID and date are not odd or even "}'
    );
};
