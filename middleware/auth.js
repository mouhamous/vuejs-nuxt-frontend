export default function ({redirect, route }) {
  let token = localStorage.token
  if (!token) {
    const path = encodeURIComponent(route.path);
    return redirect(`/?r=${path}`); 
  }
}
  