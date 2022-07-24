var name = prompt("Enter Your Name: ");
name = name.toLowerCase();
name = (name.slice(0,1)).toUpperCase() + name.slice(1,name.length);
alert("Your Name Is " + name);