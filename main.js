const { Command } = require('commander');
const { boot } = require('./src/StartRis');
const program = new Command();

program
   .name('M808950 Runtime/RIS')
   .version('0.1.2, RIS v0.2.4o')
   .description('The runtime for Microanomalizers')
program.command('startRis')
   .description('Start The RIS enviroment')
   .command('startRis')
   .action(function() {
    startRis()
   })

program.command('loopSys <file.loop> <outfile.apu>')
   .command('loopSys')
   .action(function() {
    loopSys()
   })   

   program.parse();

function startRis() {
    boot()
}

function loopSys() {
    //
}