
function armstrong(n)
{
let a=n,c=0,i=0,check=a,b=a,d;
{
while(b>0)
{
  i++;
  b=parseInt(b/10);
}

while(a>0)
{
  d=a%10;
  a=parseInt(a/10);
  c= c + (d**i);  
}
console.log(c);
if(c==check)
{
  console.log("given number is armstrong") 
}
else
{
  console.log("given number is not armstrong")
}
}
}
armstrong(153);