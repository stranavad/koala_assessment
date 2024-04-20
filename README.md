# Koala BE Assessment

### Running:
1. Fill in `DATABASE_URL` -> `.env`
2. `npm install`
3. `npm run start:dev`


### Description
1. I've used Nest JS + Drizzle ORM
2. The Drizzle connection is initiated in the `DB` module in `/src/db/db.module.ts`
3. The actual statistics service is located in `/src/stats`:
   1. `stats.controller.ts` is just a basic Rest controller with one `GET` method at `/stats`
   2. `stats.service.ts` takes care of the actual data responses


### Issues and potential improvements
1. If the app would grow in the future, I would create more complex typescript interfaces for character, nemesis and secret and the join them together for the actual response type
2. Some of the average counting could be done using the SQl query as well, but for simplicity with limited data, I chose to do it using javascript, rather than SQL
3. For improved performance, the main query could also be prepared, that would mean that the actual SQL code would not be generated on each request, but in advance, only once
4. There is currently only one function, which takes care of generating statistics (`getStats`) if the count of generated statistics would increase or grow in complexity, it could also be separated into individual functions (`getAgeStats`, `getWeightStats`, ...)'
