#!/usr/bin/env node

import { Customer } from "./Customer";
import { MovieCollection } from "./Movie";

import { Command } from "commander";
import { statement, htmlStatement } from "./statement";
import { MovieType } from "./MovieTypes";
const program: Command = require("commander");
const version: string = require("../package.json").version;

const customer: Customer = require("./data/customer.json");
const movies: MovieCollection = require("./data/movies.json");
const movieTypes: MovieType = require('./data/movie-types.json')
program
  .version(version)
  .description("A CLI for generating customer statements");

program
  .command("statement")
  .description("Prints out a plain-text statement for the customer")
  .action(() => console.log(statement(customer, movies, movieTypes)));

program
  .command("html-statement")
  .description("Prints out an html statement for the customer")
  .action(() => console.log(htmlStatement(customer, movies, movieTypes)));

program.parse(process.argv);
