//your JS code here. If required.
document.getElementById('frm').addEventListener('submit',(event)=>{
	event.preventDefault();
	var age = parseInt(document.getElementById('age').value);
	var name = document.getElementById('name').value;
	consumePromise(name,age);
})


function getData(name,age)
{
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			if(age>=18)
			{
				resolve(`Welcome, ${name}. You can vote.`)
			}
			else{
				reject(`Oh sorry ${name}. You aren't old enough.`)
			}
		},4000);
	})
}

async function consumePromise(name,age)
{
	try{
		var m = await getData(name,age);
		alert(m);
	}
	catch(error)
	{
		alert(error);
	}
}






