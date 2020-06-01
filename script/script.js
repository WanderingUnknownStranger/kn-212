function openForm() {
    document.getElementById("login-form").style.display = "block";
}<div id="login-form" class="lg-form"><form>
            <span>Name:</span>
            <span><input type="text" name="username"></span>
            <span>Age:</span>
            <span><input type="number" name="userage"></span>
            <span>Gender:</span>
            <span><input type="radio" name="choise" value="g1">Man<br>
            <input type="radio" name="choise" value="g2">Woman</span>
            <span><input type="submit"></span>
        </form></div>