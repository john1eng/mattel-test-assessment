export async function pendingApi(){
    try{
        const response = await fetch('http://localhost:8080/spring-boot-tomcat/userwithpending',
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        return data;
    }catch(error){
        return error
    }
}