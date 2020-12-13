char a[1761],*b;main(){int c,k;double d,e=1.111,x,y,z,sin(),cos();for(b=a,
c=1760;*b++=' ',--c;);for(d=.1;d<=1.3;d+=.2)for((y=d,x=0.0,c=150);c--;){z=
x*cos(e)-(y-x*x)*sin(e);y=x*sin(e)+(y-x*x)*cos(e);x=z;k=x*20.0+40+((int)(-
y*10.0+11))*80;if(k>=0&&k<1761)a[k]='*';}puts(a);}