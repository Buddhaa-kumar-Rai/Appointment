import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SserviceService {

  constructor(private http:HttpClient) { }
  savedata(a:any)
{
   return this.http.post('http://localhost:3000/users',a);
}
getdata()
{
  return this.http.get('http://localhost:3000/users');
}
deletedata(id:any)
{
  return this.http.delete('http://localhost:3000/users/'+id);
}
getcurrentdata(id:number)
{
  return this.http.get('http://localhost:3000/users/'+id);
}
updateinfo(id:number,data:any)
{
  return this.http.put('http://localhost:3000/users/'+id,data);
}


getdataadmin()
{
  return this.http.get('http://localhost:3000/admin');
}


// admin

savedataadmins(a:any)
{
   return this.http.post('http://localhost:3000/admins',a);
}
getdataadmins()
{
  return this.http.get('http://localhost:3000/admins');
}
deletedataadmins(id:any)
{
  return this.http.delete('http://localhost:3000/admins/'+id);
}
getcurrentdataadmins(id:number)
{
  return this.http.get('http://localhost:3000/admins/'+id);
}
updateinfoadmins(id:number,data:any)
{
  return this.http.put('http://localhost:3000/admins/'+id,data);
}


//status

savedd(a:any)
{
   return this.http.post('http://localhost:3000/status',a);
}
getdd()
{
  return this.http.get('http://localhost:3000/status');
}
// updateinfostatus(id:number,data:any)
// {
//   return this.http.put('http://localhost:3000/status/'+id,data);
// }
deletedd(id:any)
{
  return this.http.delete('http://localhost:3000/status/'+id);
}

}
