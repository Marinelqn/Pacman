var smiley_sprite,smiley_sprite1,smiley_sprite2,smiley_sprite3,smiley_sprite4,wall_sprite_d,wall_sprite_g;
var dx,dy,img,img1,img2,img3,img4,img5,img6;
var buzzleclair,secondes,bonus,vitbase,survie;
var pasX=new Array,pasY=new Array,libre=new Array;

function preload() {
	img=loadImage("asset/pacpac.svg.png");
	img1=loadImage("asset/pac.png");
	img2=loadImage("asset/pac1.png");
	img3=loadImage("asset/pac2.png");
	img4=loadImage("asset/pac3.png");
	img5=loadImage("asset/over.png");
	img6=loadImage("asset/dessin.png");
	bonus=loadImage("asset/buzzleclair.png");
	dx=0;
	dy=0;
}

function creermur(a,b,c,d){
	m=createSprite(a,b,c,d);
		m.shapeColor=color("blue");
		m.immovable=true;
		murs.add(m);
}

function incrementetemps(){
	secondes--
	document.getElementById("temps").innerHTML=secondes+" s";
	setTimeout(incrementetemps,1000);
}
survie--
	document.getElementById("temps").innerHTML=survie+" s";
	setTimeout(incrementetemps,1000);

function setup() {
    createCanvas(900,800);
		affiche=true;
        suivi=new Array;
		presX=new Array;
		presY=new Array;
		murs=new Group;
		fantomes=new Group;
		inter=createSprite(50,50);
        inter.addImage(img1);
		fantomes.add(inter);
        presX[0]=40;
        presY[0]=50;
		inter=createSprite(850,750);
		inter.addImage(img2);
		fantomes.add(inter);
        presX[1]=860;
        presY[1]=750;
		inter=createSprite(850,50);
		inter.addImage(img3);
		fantomes.add(inter);
        presX[2]=860;
        presY[2]=50;
		inter=createSprite(50,750);
		inter.addImage(img4);
		fantomes.add(inter);
        presX[3]=50;
        presY[3]=760;
		smiley_sprite=createSprite(450,400);
		smiley_sprite.addImage(img);
		Lebonus=createSprite(-100,500);
		Lebonus.addImage(bonus);
		/*contours*/
        creermur(895,140,10,290);//(X_centre,Y_centre,longueur,largeur)mur extrémitée droite haut
		creermur(895,670,10,290);//mur extrémitée droite bas
		creermur(05,140,10,290);//mur extrémitée gauche haut
		creermur(05,670,10,290);//mur extrémitée gauche bas
		creermur(450,795,900,10);//mur extrémitée bas
		creermur(450,5,900,10);// mur extrémitée haut
		
		/*milieu*/
		creermur(450,0,10,250);//trait haut
		creermur(450,200,200,10);//T milieu haut
		creermur(450,240,10,70);
		creermur(370,350,50,10);//maison haut gauche
		creermur(530,350,50,10);//maison haut droite
		creermur(370,450,50,10);//maison bas gauche
		creermur(530,450,50,10);//maison bas droite
		creermur(350,400,10,110);//maison gauche
		creermur(550,400,10,110);//maison droite
		creermur(450,520,210,10);//T milieu
		creermur(450,555,10,70);
		creermur(450,660,210,10);//T bas
		creermur(450,695,10,70);
			
			
		/*gauche*/
		creermur(80,100,10,50);//1er rectangle haut 
		creermur(150,100,10,50);
		creermur(115,80,70,10);
		creermur(115,120,70,10);
		creermur(80,210,10,30);//2ème rectangle haut 
		creermur(150,210,10,30);
		creermur(115,200,70,10);
		creermur(115,220,70,10);
		creermur(280,80,110,10);//2ème rectangle 
		creermur(280,120,110,10);
		creermur(230,100,10,50);
		creermur(340,100,10,50);
		creermur(230,275,10,160);//|- 
		creermur(285,280,120,10);
		creermur(80,280,150,10);//sortie haut 
		creermur(75,350,160,10);
		creermur(150,315,10,70);
		creermur(75,450,160,10);//sortie bas 
		creermur(75,520,160,10);
		creermur(150,490,10,70);
		creermur(230,485,10,80);//trait vertical 
		creermur(110,590,70,10);//angle bas 
		creermur(150,625,10,80);
		creermur(270,590,90,10);//trait horizontale bas 
		creermur(40,660,70,10);//trait bas 
		creermur(260,690,10,70);//__|_ bas 
		creermur(200,725,250,10);
			
		/*droite*/
		creermur(820,100,10,50);//1er rectangle haut
		creermur(750,100,10,50);
		creermur(785,80,70,10);
		creermur(785,120,70,10);
		creermur(820,210,10,30);//2ème rectangle haut 
		creermur(750,210,10,30);
		creermur(785,200,70,10);
		creermur(785,220,70,10);
		creermur(620,80,110,10);//2ème rectangle 
		creermur(620,120,110,10);
		creermur(670,100,10,50);
		creermur(560,100,10,50);
		creermur(670,275,10,160);//-| 
		creermur(615,280,120,10);
		creermur(820,280,150,10);//sortie haut 
		creermur(825,350,160,10);
		creermur(750,315,10,70);
		creermur(825,450,160,10);//sortie bas 
		creermur(825,520,160,10);
		creermur(750,490,10,70);
		creermur(670,485,10,80);//trait vertical 
		creermur(790,590,70,10);//angle bas 
		creermur(750,625,10,80);
		creermur(630,590,90,10);//trait horizontale bas 
		creermur(860,660,70,10);//trait bas 
		creermur(640,690,10,70);//_|__ bas droite
		creermur(700,725,250,10);
		
		secondes=20
		survie=0
		
        suivi[0]=true;
        suivi[1]=true;
        suivi[2]=true;
        suivi[3]=true;
        pasX[0]=1;
		pasY[0]=0;
		pasX[1]=-1;
		pasY[1]=0;
		pasX[2]=0;
		pasY[2]=-1;
		pasX[3]=-1;
		pasY[3]=0;
		afficherbonus=false;
		ok=true;
		vitbase=5; 
		vit=5;
		start=true;	

}

function draw() {
	
	background("black");
	smiley_sprite.bounce(murs);
	fantomes.collide(murs);
    smiley_sprite.collide(Lebonus,contactb);
    smiley_sprite.position.x+=dx;
	smiley_sprite.position.y+=dy;
	if(smiley_sprite.position.x>=930) smiley_sprite.position.x=-25;
	if(smiley_sprite.position.x<=-30) smiley_sprite.position.x=925;

for(i=0;i<4;i++) {
    if(fantomes[i].position.x==presX[i] && fantomes[i].position.y==presY[i]) arret(i);
    presX[i]=fantomes[i].position.x;
    presY[i]=fantomes[i].position.y;
    if(suivi[i]==true) {
        diffx = (smiley_sprite.position.x - presX[i]);
        diffy = (smiley_sprite.position.y - presY[i]);
        
            if(diffx!=0) pasX[i]=Math.round(diffx/(Math.abs(diffx))); else pasX[i]=0;
            if(diffy!=0) pasY[i]=Math.round(diffy/(Math.abs(diffy))); else pasY[i]=0;
    
    }
    fantomes[i].position.x=presX[i]+pasX[i];
	fantomes[i].position.y=presY[i]+pasY[i];
    }
	
  if(afficherbonus!=true) fantomes.collide(smiley_sprite,contact);
 if(ok==true) drawSprites(); else contact();


	if(affiche==true) {
		image (img6,-230,-90);
	
	}
	if(secondes==0) {secondes=20;afficherbonus=true;Lebonus.position.x=random(18,882);Lebonus.position.y=random(18,782);Lebonus.displace (murs); }
	
	if(secondes==10) afficherbonus=false;
	if(afficherbonus!=true) {Lebonus.position.x=-100;Lebonus.position.y=500;}
	
}
{affichesurvie==tue}

function contactb(bonus){

	afficherbonus=false;
	vit=vitbase*2;
	setTimeout("stopbonus()",5000);

}
function stopbonus(bonus){
    vit=vitbase;

	}

function contact(fantomes){
	image(img5,0,0);
	ok=false;
	
}

function arret(index){
    suivi[index]=false;
    choix1=Math.floor(Math.random()*2);
	choix2=Math.floor(Math.random()*2);
	pasX[index]=(1-2*choix2)*choix1;
	pasY[index]=(1-2*choix2)*(1-choix1);
}

function keyPressed(){
    suivi[0]=true;suivi[1]=true;suivi[2]=true;suivi[3]=true;
	if(keyCode==37) {dx=-vit;smiley_sprite.mirrorX(-1);smiley_sprite.mirrorY(1);smiley_sprite.rotation=0;}
	if(keyCode==39) {dx=vit;smiley_sprite.mirrorX(1);smiley_sprite.mirrorY(1);smiley_sprite.rotation=0;}
	if(keyCode==38) {dy=-vit;smiley_sprite.mirrorX(1);smiley_sprite.mirrorY(-1);smiley_sprite.rotation=90;}
	if(keyCode==40) {dy=vit;smiley_sprite.mirrorX(1);smiley_sprite.mirrorY(1);smiley_sprite.rotation=90;}
}

function keyReleased(){
	dx=0;
	dy=0;
}

function mousePressed(){
if(start==true){affiche=false;start=false;setTimeout(incrementetemps,1000);}
}

