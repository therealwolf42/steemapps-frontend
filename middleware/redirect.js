export default function ({ store, route, redirect, next }) {
  if(route.fullPath.includes('@')) {
    console.log(route, redirect, next)
    return redirect(route.fullPath)
  }
}