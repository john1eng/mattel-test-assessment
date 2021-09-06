export async function approveOrRejectApi(statusId, status){
    try{
        const response = await fetch('http://localhost:8080/spring-boot-tomcat/status',
        {
            method: 'PUT',
            body: JSON.stringify({statusId, status}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        await response.json();
    }catch(error){
        return error
    }
}