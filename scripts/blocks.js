Events.on(ContentInitEvent, e => {
     Vars.content.block("frozen-farlands-snow-diamond-wall").attributes.set(Attribute.get("ice"), 0.25);
     Vars.content.block("frozen-farlands-blue-deep-ice-wall").attributes.set(Attribute.get("ice"), 0.75);
     Vars.content.block("frozen-farlands-ice-shard-wall").attributes.set(Attribute.get("ice"), 1);


     Vars.content.block("frozen-farlands-pyrochlore-deposit").attributes.set(Attribute.get("pyrochlore"), 1);




     Vars.content.block("frozen-farlands-b21-ice-crusher").attribute = Attribute.get("ice");
     Vars.content.block("frozen-farlands-b22-pyrochlore-crusher").attribute = Attribute.get("pyrochlore");
});