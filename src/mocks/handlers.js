import { rest } from "msw";

export const handlers = [
  rest.get(process.env.REACT_APP_API_URL, (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          name: "Task 1",
          dueDate: "Date.now()",
          compleated: false,
        },
        {
          id: 2,
          name: "Task 2",
          dueDate: "Date.now()",
          compleated: true,
        },
      ])
    )
  ),

  rest.get("https://failtherequest.com/thisworks", (req, res, ctx) =>
    res(ctx.status(404), ctx.json({}))
  ),

  rest.post(process.env.REACT_APP_API_URL, (req, res, ctx) => {
    if (req.body[0] === "fail") {
      return res(ctx.status(405), ctx.json({}));
    } else {
      return res(
        ctx.status(201),
        ctx.json({
          id: 3,
          name: "Task 3",
          dueDate: "Date.now()",
          compleated: false,
        })
      );
    }
  }),

  rest.delete(`${process.env.REACT_APP_API_URL}3`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json({}))
  ),

  rest.patch(`${process.env.REACT_APP_API_URL}3`, (req, res, ctx) =>
    res(
      ctx.status(201),
      ctx.json({
        id: 3,
        name: "Task 3",
        dueDate: "Date.now()",
        compleated: false,
      })
    )
  ),

  rest.delete(`${process.env.REACT_APP_API_URL}2`, (req, res, ctx) =>
    res(ctx.status(404), ctx.json({}))
  ),

  rest.patch(`${process.env.REACT_APP_API_URL}2`, (req, res, ctx) =>
    res(ctx.status(404), ctx.json({}))
  ),
];
