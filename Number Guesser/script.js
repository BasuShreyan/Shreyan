//VARIABLES
let num=Math.floor(Math.random()*(100-1))+1;
let tries=5;
let choice;
let hint=document.getElementById('hint');
let entries=document.getElementById('tries');
let game_over=document.getElementById('game over');
//PROGRAM
document.getElementById('btn').onclick=function () {
	choice=Number(document.getElementById('box').value);
	if(tries==1)
	{
		game_over.textContent=`You failed! The Number is ${num}`;
		hint.textContent=``;
		entries.textContent=``;
	}
	if(isNaN(choice))
	{
		hint.textContent="Enter a valid number";
	}
	else if(tries>1)
	{
		if(choice==num)
		{
			hint.textContent=`Congrats! You have found the number`;
		}
		else
		{
			if(choice<(num-20))
			{
				tries--
				hint.textContent=`Too Low`;
				entries.textContent=`You have ${tries} tries remaining`;
			}
			else if(choice>(num+20))
			{
				tries--;
				hint.textContent=`Too High`;
				entries.textContent=`You have ${tries} tries remaining`;
			}
			else
			{
				tries--;
				hint.textContent=`Close but no Cigar! `;
				entries.textContent=`You have ${tries} tries remaining`;
			}
		}
	}
}