import React from "react";

export const navigationRef = React.createRef();

export function navigate(name?:string, params?:any) {
  navigationRef.current?.navigate(name, params);
}
export function navigateGoBack(name?:string, params?:any) {
  navigationRef.current?.goBack();
}
export function navigateAndReset(name:string, params?:any) {
  navigationRef.current?.reset({
    index: 0,
    routes: [{name: name, params: params}]
  });
}
