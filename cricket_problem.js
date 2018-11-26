var arr=[1,0,2,3,4,1,4,2,3,1,2];
var i,p1=0,p2=0;
var p1lock=0,p2lock=0;
var over_b=0;
for(i=0;i<arr.length;i++){
    over_b++;
    if(p1lock==0){
            p1=p1+arr[i];
            if((arr[i])%2!=0){
                        p1lock=1;
                        p2lock=0;
            }
    }
    else if(p2lock==0){
        p2=p2+arr[i];
        if((arr[i])%2!=0){
            p2lock=1;
            p1lock=0;
        }
    }
    if(over_b==6&&p1lock==1){
        p1lock=0;
        p2lock=1;
        over_b=0;
    }else if(over_b==6&&p2lock==1){
        p1lock=1;
        p2lock=0;
        over_b=0;
    }
}
console.log(p1,p2);
