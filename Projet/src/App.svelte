<script>

var logementJson = {}
    import { Router, Link, Route, navigate } from "svelte-routing";
    import Logement from './component/Logement.svelte';
    import Header from './component/Header.svelte';
    import { onMount } from "svelte";
    import ComptePage from "./page/ComptePage.svelte";
    import LoginPage from "./page/LoginPage.svelte";
    import LogementForm from './component/LogementForm.svelte';

    if (localStorage.userID == '') {
        navigate("/login", {replace:true})
    }

    

  onMount(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });


</script>

<Router>
  <nav>
    <Link to="/"></Link>
    <Link to="/login"></Link>
    <Link to="/compte"></Link>
  </nav>
  <div>
    <Route path="/">

        <Header/>
        <Logement/>

        <LogementForm/> 
    </Route>
    <Route path="/login">
        <LoginPage/>
    </Route>
    <Route path="/compte">
        <Header/>
        <ComptePage/>
    </Route>
  </div>
</Router>




