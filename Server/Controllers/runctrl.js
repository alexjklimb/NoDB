let runs = [];
let id = 0;
module.exports = {
    create: (req, res) => {
        const { date,distance,speed } = req.body;
        runs.push({ id, date, distance, speed});
        id++;
        res.status(200).send(runs);
      },
      
      read: (req, res) => {
        res.status(200).send(runs);
      },
    


      update: (req, res) => {
        const { date,distance,speed } = req.body;
        const updateID = req.params.id;
        const runIndex = runs.findIndex(run => run.id == updateID);
        let run = runs[runIndex];
    
        runs[runIndex] = {
          id: run.id,
          date: date || run.date,
          distance: distance || run.distance,
          speed: speed || run.speed,
        };
    
        res.status(200).send(runs);
      },
    
      delete: (req, res) => {
        const deleteID = req.params.id;
        runIndex = runs.findIndex(run => run.id == deleteID);
        runs.splice(runIndex, 1);
        res.status(200).send(runs);
      }
};