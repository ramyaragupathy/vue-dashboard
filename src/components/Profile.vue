<template>
  <div>
  <div id="Profile">
        <div class="box">

          <div class="columns">
            <div class="column is-11">
              <span class="icon">
                <i class="fa fa-user" aria-hidden="true"></i>
              </span>
              <p id="Name" class="title is-4">{{ name }}</p>
              <p class="subtitle is-6">Joined:
                <span id="Doj">15-13-1996</span>
              </p>
            </div>
            <div class="column is-1">
              <span id="edit" class="button is-medium is-info is-pulled-right">
                <span class="icon">
                  <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                </span>
              </span>
            </div>
          </div>

          <div class="columns">
            <div class="column">
              <span class="icon">
                <i class="fa fa-birthday-cake" aria-hidden="true"></i>
              </span>
              <p id="Dob" class="subtitle is-4">{{ dob }}</p>
            </div>
            <div class="column">
              <span class="icon">
                <i class="fa fa-mobile" aria-hidden="true"></i>
              </span>
              <p id="Number" class="subtitle is-4">{{ number }}</p>
            </div>
            <div class="column">
              <span class="icon">
                <i class="fa fa-address-card" aria-hidden="true"></i>
                <br>
              </span>
              <span id="Address">{{ address }}</span>
            </div>
          </div>

          <div class="columns">

            <div class="column">
              <span class="icon">
                <i class="fa fa-link" aria-hidden="true"></i>
              </span>
              <span id="Links" class="title is-6">Links</span>
              <div id="links" v-html="linksList"></div>
            </div>

            <div class="column">
              <span class="icon">
                <i class="fa fa-fort-awesome" aria-hidden="true"></i>
              </span>
              <span class="title is-6">Skills</span>
              <div id="Skill" v-html="skillsList"></div>
            </div>


          </div>

        </div>

      
    </div>

    <div id="editor" class="modal">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Modal title</p>
          <button id="exit" class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">

          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input id="name" v-model="name" class="input" type="text" placeholder="Name">
            </div>
          </div>
          <div class="field">
            <label class="label">DoB</label>
            <div class="control">
              <input id="dob" v-model="dob" class="input" type="text" placeholder="DoB">
            </div>
          </div>
          <div class="field">
            <label class="label">Contact no.</label>
            <div class="control">
              <input id="number" v-model="number" class="input" type="text" placeholder="Number">
            </div>
          </div>

          <div class="field">
            <label class="label">Address</label>
            <div class="control">
              <textarea id="address" v-model="address" class="textarea" placeholder="Your address"></textarea>
            </div>
          </div>

          <div class="field">
            <label class="label">Links</label>
            <div class="control">
              <textarea id="links" v-model="links" class="textarea" placeholder="Your social-media profiles (one on each line)"></textarea>
            </div>
          </div>

          <div class="field">
            <label class="label">Skills</label>
            <div class="control">
              <textarea id="skill" v-model="skills" class="textarea" placeholder="Skills comma seprated"></textarea>
            </div>
          </div>

          <div class="field">
            <label class="label">Current Password</label>
            <div class="control">
              <textarea id="skill" v-model="skills" class="textarea" placeholder="Skills comma seprated"></textarea>
            </div>
          </div>

          <div class="field">
            <label class="label">New password</label>
            <div class="control">
              <textarea id="skill" v-model="skills" class="textarea" placeholder="Skills comma seprated"></textarea>
            </div>
          </div>

          <div class="field">
            <label class="label">Repeat new password</label>
            <div class="control">
              <textarea id="skill" v-model="skills" class="textarea" placeholder="Skills comma seprated"></textarea>
            </div>
          </div>

        </section>
        <footer class="modal-card-foot">
          <button id="save" class="button is-success">Save changes</button>
          <button id="cancel" class="button">Cancel</button>
        </footer>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      name: "Sumit",
      dob: "52-32-2534",
      number: "234423432",
      address: "jdks joys hospal \n afj roal \n bangmore karmatka",
      links: [
        "https://www.linkedin.com/in/mukul-mahajan-singraur-b9386a130/",
        "https://www.facebook.com/in/mukul-mahajan-singraur-b9386a130/",
        "https://www.github.com/in/mukul-mahajan-singraur-b9386a130/",
        "https://www.facebook.com/in/mukul-mahajan-singraur-b9386a130/",
        "https://www.twitter.com/in/mukul-mahajan-singraur-b9386a130/",
        "https://www.linkein.com/in/mukul-mahajan-singraur-b9386a130/"
      ],
      skills: ["c", "c++", "c#", "chai", "cobol", "clojure", "contra"]
    };
  },
  computed: {
    skillsList: function() {
      return this.skills
        .map(skill => '<span class="tag is-dark">' + skill + "</span>")
        .join(" ");
    },
    linksList: function() {
      return this.links
        .map(
          link =>
            `<a href='` +
            link +
            `' target="_blank" class='nav-link'>
                  ` +
            link.replace(
              /.*(linkedin\.com|github\.com|twitter\.com|facebook\.com|www).*/,
              (match, site) => {
                if (site) {
                  var icons = {
                    "linkedin.com":
                      '<i class="fa fa-linkedin" aria-hidden="true" style="font-size: 2rem"></i>',
                    "facebook.com":
                      '<i class="fa fa-facebook" aria-hidden="true" style="font-size: 2rem"></i>',
                    "github.com":
                      '<i class="fa fa-github" aria-hidden="true" style="font-size: 2rem"></i>',
                    "twitter.com":
                      '<i class="fa fa-twitter" aria-hidden="true" style="font-size: 2rem"></i>'
                  };

                  if (icons.hasOwnProperty(site)) {
                    return icons[site];
                  }
                }
                return '<i class="fa fa-link" aria-hidden="true" style="font-size: 2rem"></i>';
              }
            ) +
            `</a>`
        )
        .join(" ");
    }
  }
};
</script>