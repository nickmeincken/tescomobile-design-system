import { html } from 'lit';

export const Tabs = () => html`
<div class="tabs">
  <nav class="tab">
    <button class="tablinks active" onclick="openTab(event, 'tab1')">Tab 1</button>
    <button class="tablinks" onclick="openTab(event, 'tab2')">Tab 2</button>
    <button class="tablinks" onclick="openTab(event, 'tab3')">Tab 3</button>
    <button class="tablinks" onclick="openTab(event, 'tab4')">Tab 4</button>
  </nav>
  <div id="tab1" class="tabcontent" style="display: block">
    <p>Content 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod odio non leo pretium pellentesque. Curabitur blandit urna cursus, malesuada erat ut, egestas odio. Quisque suscipit, urna ac vulputate sollicitudin, mi urna elementum augue, id tristique arcu erat non enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod odio non leo pretium pellentesque. Curabitur blandit urna cursus, malesuada erat ut, egestas odio. Quisque suscipit, urna ac vulputate sollicitudin, mi urna elementum augue, id tristique arcu erat non enim.</p>
  </div>
  <div id="tab2" class="tabcontent">
    <p>Content 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod odio non leo pretium pellentesque. Curabitur blandit urna cursus, malesuada erat ut, egestas odio. Quisque suscipit, urna ac vulputate sollicitudin, mi urna elementum augue, id tristique arcu erat non enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod odio non leo pretium pellentesque. Curabitur blandit urna cursus, malesuada erat ut, egestas odio. Quisque suscipit, urna ac vulputate sollicitudin, mi urna elementum augue, id tristique arcu erat non enim.</p>
  </div>
  <div id="tab3" class="tabcontent">
    <p>Content 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod odio non leo pretium pellentesque. Curabitur blandit urna cursus, malesuada erat ut, egestas odio. Quisque suscipit, urna ac vulputate sollicitudin, mi urna elementum augue, id tristique arcu erat non enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod odio non leo pretium pellentesque. Curabitur blandit urna cursus, malesuada erat ut, egestas odio. Quisque suscipit, urna ac vulputate sollicitudin, mi urna elementum augue, id tristique arcu erat non enim.</p>
  </div>
  <div id="tab4" class="tabcontent">
    <h3>Nicaragua Surf Trip</h3>
    <h2>3-day surf camp in San Juan del Sur</h2>
    <p>We believe that you should experience an authentic surf journey. During this week, you will get the chance to dive deep into the world of surfing, like no other place on earth.</p>
    <ul>
      <li>Exclusive villa for our groups of 12 surfers, with panoramic views on the Pacific</li>
      <li>Some of the world's most consistent quality waves for beginners & intermediates</li>
      <li>Walk to cafes, restaurants and beach bars</li>
      <li>330+ days of "offshore" wind, creating extremely fun and clean waves</li>
      <li>Learn to surf with members of the National Surf Team</li>
    </ul>
  </div>
</div>
<script>
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
</script>
`;
