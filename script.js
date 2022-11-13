var names=new Array();
names[0]="achraf";
names[1]="John";
names[2]="yaakov";
names[3]="ahmed";
names[4]="paul";
names[5]="jen";
names[6]="laurra";
names[7]="paula";
names[8]="linda";
names[9]="max";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}