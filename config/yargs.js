const argv = require('yargs')
    .options({
        'b': {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la base de la tabla de multilicar'
        },
        'l': {
            alias: 'listar',
            type: 'boolean',
            default: false,
            describe: 'Lista la tabla en consola'
        },
        'h': {
            alias: 'hasta',
            type: 'number',
            demandOption: true,
            describe: 'limite de la tabla de multiplicar'
        }
    })
    /* .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true
    }) */
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un numero'
        }
        if (isNaN(argv.h)) {
            throw 'El limite tiene que ser un numero'
        }
        return true;
    })
    .argv;

module.exports = argv;