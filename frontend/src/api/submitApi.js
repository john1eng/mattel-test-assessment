export async function submitApi(user){
    try{
        const response = await fetch('http://localhost:8080/spring-boot-tomcat/user',
        {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data)
        return data;
    }catch(error){
        return error
    }
}