<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$outp = '[ {"name":"Watch","icon":"photo1.svg", "point":"V.Velykoho 73","date":"01.04.2016", "price":20.0},'.
          '{"name":"Phone","icon":"photo2.svg", "point":"KingCross","date":"15.03.2016", "price":150.99},'.
          '{"name":"Bag","icon":"photo3.svg", "point":"NU LP","date":"01.04.2016", "price":50} ]';

echo($outp);
?>