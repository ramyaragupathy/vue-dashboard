<template>
  <div id="EditInfo">
    <div class="box">
      
      <div id="editor">
            <p class="modal-card-title">Edit your information</p>

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
                <input id="skill" class="input">
              </div>
            </div>

            <div class="field">
              <label class="label">New password</label>
              <div class="control">
                <input id="skill" class="input">
              </div>
            </div>

            <div class="field">
              <label class="label">Repeat new password</label>
              <div class="control">
                <input id="skill" class="input">
              </div>
            </div>

            <button id="save" class="button is-success">Save changes</button>
            <button id="cancel" class="button">Cancel</button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "EditInfo",
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
            `' target="_blank" class='nav-link'>` +
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
        .join();
    }
  }
};
</script>

