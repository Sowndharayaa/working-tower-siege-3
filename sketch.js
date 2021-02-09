const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup(){
    createCanvas (1500,500);
    engine= Engine.create();
    world= engine.world;

}
function draw(){
    Engine.update(engine);
    background("black");

  
}
