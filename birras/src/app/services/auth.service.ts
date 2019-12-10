import { Injectable } from '@angular/core';
import{AngularFireAuth} from '@angular/fire/auth';
import{User}from '../shared/user.class';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
public isLogged:any=false;
  constructor(public AfAuth:AngularFireAuth) {
    AfAuth.authState.subscribe(user => (this.isLogged=user));
  }

   async onLogin(user:User){
try{
  return await this.AfAuth.auth.signInWithEmailAndPassword(
    user.email,
    user.password
    );
}catch(error){
console.log('error de usuario o contraseña', error);
}   
}

async onRegister (user:User){
  try{
return await this.AfAuth.auth.createUserWithEmailAndPassword(
  user.email,
  user.password
    );
}catch(error){
  console.log('error de registro', error);
}
}
}