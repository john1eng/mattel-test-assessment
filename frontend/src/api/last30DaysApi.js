export async function last30DaysApi(){
    try{
        const response = await fetch('http://localhost:8080/spring-boot-tomcat/last30Days',
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