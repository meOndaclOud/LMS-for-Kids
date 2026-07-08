/* CIY Club course content lives here so teachers can update it in one place. */
const courses = {
  thinkercad: {
    name: 'Tinkercad', icon: 'cube', color: '#00a8ff', pale: '#eaf7ff', age: '8–13', level: 'Beginner', group: 'starter',
    short: 'Design colorful 3D objects and inventions in your browser.',
    intro: 'Learn 3D design through short visual slides, guided demonstrations, and a finished name-tag project.',
    about: 'Tinkercad is a free, beginner-friendly 3D design tool from Autodesk. It works in a web browser and lets you build models by combining simple shapes. Students learn the same foundations used in product design: size, position, rotation, alignment, solids, holes, and accurate measurement. A finished design can later become a real object with a 3D printer.',
    examples: [['architecture','Architecture','Plan a room or a tiny house before it is built.'],['design','Product design','Prototype a useful handle, toy, or tool.'],['printing','3D printing','Send a finished model to a printer and hold your idea.']],
    applicationImage: '../images/tinkercad-applications-slide.png',
    applicationCaption: 'From left to right: a name tag, architectural model, robot component, and geometric plant pot.',
    outline: [
      ['01','Think in 3D','Understand width, depth, height, and useful real-world applications.'],
      ['02','Explore the workspace','Recognize the workplane, shape library, view cube, and camera controls.'],
      ['03','Transform objects','Move, resize, lift, and rotate shapes accurately.'],
      ['04','Build with precision','Duplicate, align, group, and subtract holes from solid shapes.'],
      ['05','Create a name tag','Combine every skill in a small project ready for export.']
    ],
    video: 'gOs6Mdj7y_4',
    lessons: [
      ['Think in three dimensions','Identify width, depth, and height and connect 3D design to real objects.','A flat drawing has width and height. A 3D model adds depth, so you can look around it and understand its complete form. Designers use 3D models to test an idea before making the real object.',['Look at an object from the front, side, and top.','Name its width, depth, and height.','Notice how simple forms—boxes, cylinders, and cones—can describe complex objects.','Choose one everyday object you would like to redesign.'],'Begin every model with a simple sketch and three approximate measurements.','2D: width × height\n3D: width × depth × height\nIDEA → MODEL → TEST → MAKE','Find three objects around you and identify the simple 3D shapes hidden inside them.','../images/tinkercad-applications-slide.png','3D design is used for products, buildings, robot parts, and printable objects.'],
      ['Explore the workspace','Recognize the workplane, shape library, view cube, and camera controls.','The workplane is your digital building table. The shape library stores building blocks, while the view cube and camera controls let you inspect the model from every direction.',['Open a new design and locate the large grid.','Find the basic-shapes panel on the right.','Drag a box onto the workplane.','Use the view cube to switch between top, front, and side views.','Orbit, zoom, and pan without moving the object.'],'If you feel lost, click the Home view to frame the complete model again.','DRAG → PLACE\nORBIT → LOOK AROUND\nZOOM → INSPECT\nHOME → RESET VIEW','Place a box, cylinder, and roof on the workplane, then capture three different views.','../images/tinkercad-workspace-slide.png','The workspace uses a grid, shape library, transform handles, toolbar, and view controls.'],
      ['Move, resize & rotate','Control an object’s position, measurements, height, and angle.','When a shape is selected, its handles reveal the actions you can perform. Corner handles resize, the cone lifts, and curved arrows rotate. Number boxes let you work accurately.',['Select a box and set its width to 30 mm.','Set its depth to 20 mm and height to 10 mm.','Lift it 5 mm above the workplane, then return it to 0.','Rotate it 45 degrees and inspect it from the top.'],'Change one measurement at a time and watch which direction changes.','SIZE: 30 × 20 × 10 mm\nLIFT: 5 mm\nROTATE: 45°','Create a staircase from three boxes with increasing height.'],
      ['Duplicate, align & make holes','Combine shapes accurately and remove material where needed.','Duplicate creates an exact copy. Align positions selected objects along a shared edge or center. Group joins solids, while a hole shape subtracts material like a cookie cutter.',['Create one tower and duplicate it.','Select both towers and align their bottom edges.','Place a cylinder hole through a larger solid box.','Select the box and hole, then choose Group.','Inspect the clean opening from different angles.'],'Hole shapes must overlap a solid before grouping can remove material.','DUPLICATE → ALIGN\nSOLID + SOLID = JOIN\nSOLID + HOLE = CUT','Build a simple bridge with two equal supports and one aligned top beam.'],
      ['Create a name tag','Apply shapes, text, alignment, grouping, and holes in one finished model.','A good project follows a design process: plan, build, inspect, improve, and export. Your name tag should be readable, strong, and small enough to print efficiently.',['Create a rounded base about 50 × 25 × 3 mm.','Add text and raise it 1–2 mm above the base.','Align the text to the center of the tag.','Add a cylinder hole near one corner for a string.','Group the parts and inspect every side before export.'],'Keep enough solid material around the hole so the tag will not break.','BASE + RAISED TEXT − HOLE\nCHECK → GROUP → EXPORT','Design a personalized tag with raised text, a safe string hole, and one decorative shape.','../images/tinkercad-applications-slide.png','A finished 3D model combines accurate dimensions, readable details, and a practical purpose.']]
  },
  codeorg: {
    name: 'Code.org', icon: 'blocks', color: '#006dff', pale: '#eaf3ff', age: '7–12', level: 'Starter', group: 'starter', short: 'Solve playful puzzles and learn how computer programs think.', intro: 'Guide characters through puzzles while learning sequences, loops, and events.',
    about: 'Code.org is a nonprofit learning platform that makes computer science accessible to every student. Its block-based puzzles let you create programs without worrying about typing. You learn to give precise instructions, notice patterns, and fix mistakes—skills used by every programmer.',
    examples: [['games','Games','Rules and instructions control characters and scores.'],['systems','Smart systems','Programs help traffic lights follow safe patterns.'],['apps','Apps','Events make buttons respond when we tap them.']], video: 'FC5FbmsH4fw',
    lessons: [
      ['Code is a sequence','Put instructions in the correct order.','A sequence is a set of steps followed from top to bottom. Computers need each step to be clear and ordered.',['Look at where the character starts.','Plan the path with your finger.','Snap move blocks in the correct order.','Run the code and observe.'],'Say your steps aloud before building the program.','MOVE FORWARD\nTURN RIGHT\nMOVE FORWARD','Write block instructions to move from your chair to the classroom door.'],
      ['Spot the loop','Use repeat blocks for actions that happen again.','A loop repeats instructions. It makes code shorter, clearer, and easier to change.',['Find a pattern that repeats.','Place the repeated action inside a repeat block.','Choose how many times it should run.','Test and adjust the number.'],'If you copied the same block three times, look for a loop.','REPEAT 4 TIMES {\n  MOVE FORWARD\n}','Draw a square using one move block, one turn block, and a repeat loop.'],
      ['Make events happen','Connect an action to a click or key press.','An event tells a program when to begin an action. A tap, click, or key press can all be events.',['Choose a “when clicked” event.','Attach a movement or sound block below it.','Run the program.','Click the character to test it.'],'One project can have many event blocks working together.','WHEN CLICKED → JUMP\nWHEN SPACE → SOUND','Create a character that moves on click and makes a sound when Space is pressed.']]
  },
  scratch: {
    name: 'Scratch', icon: 'cursor', color: '#00b8d9', pale: '#e9faff', age: '8–14', level: 'Beginner', group: 'starter', short: 'Create your own stories, animations, and games with code blocks.', intro: 'Imagine, program, and share interactive stories using colorful coding blocks.',
    about: 'Scratch is a creative coding language developed by the MIT Media Lab. Instead of typing commands, you snap blocks together like puzzle pieces. Scratch helps you learn programming logic while making stories, games, music, and animation.', examples: [['stories','Interactive stories','Let readers choose what a character does next.'],['games','Games','Build controls, points, levels, and challenges.'],['animation','Animation','Move characters and change scenes over time.']], video: 'jXUZaf5D12A',
    lessons: [
      ['Sprites take the stage','Move a sprite and choose a backdrop.','A sprite is a character or object. The stage is the world where your project happens. Each sprite follows its own scripts.',['Choose a sprite from the library.','Choose a backdrop for the stage.','Add “when green flag clicked.”','Add “move 10 steps” and click the flag.'],'Use x for left and right; use y for up and down.','FLAG → GO TO x:0 y:0\nMOVE 50 STEPS','Choose two sprites and position them on opposite sides of a backdrop.'],
      ['Animate with looks','Create movement by switching costumes.','Costumes are different pictures of the same sprite. Switching them quickly creates the illusion of movement.',['Open the Costumes tab and view the choices.','Add “next costume” below a move block.','Add a short wait.','Put both actions inside a repeat loop.'],'A 0.15-second wait often makes walking look smooth.','REPEAT 10 {\n MOVE 10\n NEXT COSTUME\n WAIT .15\n}','Animate a sprite walking across the stage and saying hello.'],
      ['Build a catch game','Use events, variables, and sensing in a game.','A variable remembers information such as score. A sensing block can detect when two sprites touch.',['Create a variable named Score and set it to 0.','Move the catcher with arrow keys.','Make an object fall from the top.','When it touches the catcher, change Score by 1.'],'Reset every variable when the green flag is clicked.','IF TOUCHING catcher {\n SCORE + 1\n GO TO TOP\n}','Make a 30-second catch game. Add a sound whenever the player scores.']]
  },
  snap: {
    name: 'Snap!', icon: 'nodes', color: '#7047eb', pale: '#f1edff', age: '11–16', level: 'Explorer', group: 'explorer', short: 'Think like a computer scientist with powerful visual programming.', intro: 'Go beyond basic blocks by building your own commands and clever patterns.',
    about: 'Snap! is a visual programming language created at the University of California, Berkeley. It looks like Scratch but introduces deeper computer science ideas, including custom blocks, lists, and recursion. It is a friendly bridge from block coding to advanced programming.', examples: [['art','Generative art','Repeat mathematical patterns to draw surprising pictures.'],['data','Data projects','Store values in lists and turn them into information.'],['simulation','Simulations','Model how simple rules create complex behavior.']], video: '2z0h2dGbY6k',
    lessons: [
      ['Commands & reporters','Tell the difference between actions and values.','Command blocks perform actions. Reporter blocks answer questions or calculate values and fit inside other blocks.',['Find a blue motion command.','Find a round green operator reporter.','Place 5 + 7 inside a “say” command.','Run it and check the answer.'],'The shape of a block shows where it can fit.','COMMAND: move 10\nREPORTER: (5 + 7)','Make a sprite say the result of three different calculations.'],
      ['Create a custom block','Package useful steps into your own command.','A custom block gives a meaningful name to a group of instructions. This is called abstraction.',['Choose Make a block.','Name it “draw square” and add a size input.','Build a repeat-4 script inside it.','Call the new block with different sizes.'],'A good block name clearly says what the block does.','DEFINE draw square(size)\nREPEAT 4 { move size; turn 90 }','Create a “draw triangle” block with a size input.'],
      ['Patterns with recursion','Make a block call itself with a smaller input.','Recursion happens when a procedure uses itself. It needs a stopping condition so it does not continue forever.',['Create a block with a size input.','Draw one shape.','If size is greater than 5, call the block with size − 5.','Test with a small starting value.'],'Always create the stopping condition first.','IF size > 5 {\n DRAW(size)\n PATTERN(size - 5)\n}','Create a trail of shrinking squares. Change the turn angle and compare patterns.']]
  },
  simlab: {
    name: 'SimLab', icon: 'orbit', color: '#008cff', pale: '#eaf6ff', age: '11–17', level: 'Explorer', group: 'explorer', short: 'Build interactive 3D scenes and explore virtual worlds.', intro: 'Arrange 3D models, materials, lights, and interactions in a virtual scene.',
    about: 'SimLab is a collection of tools for creating and sharing interactive 3D experiences. A virtual scene combines models, materials, lighting, cameras, and actions. Learning these ideas develops spatial thinking and shows how product demonstrations, training simulations, and virtual worlds are made.', examples: [['visits','Virtual visits','Explore a building or museum from anywhere.'],['training','Training','Practise safe steps before using real equipment.'],['interior','Interior design','Try furniture, colors, and lighting in a room.']], video: '8MZ9JQxc9Dk',
    lessons: [
      ['Build a 3D scene','Place, move, rotate, and scale objects.','Every object has a position, rotation, and size. Together these properties are called its transform.',['Create a new scene.','Insert two simple 3D objects.','Use the arrows to move one object.','Rotate and scale it to fit the scene.'],'Switch between top and side views to check placement.','POSITION: x, y, z\nROTATION: angle\nSCALE: size','Arrange a table, three objects, and a background wall.'],
      ['Materials & light','Change how surfaces and shadows look.','A material describes a surface—its color, texture, shine, and roughness. Lights help us understand shape and mood.',['Select an object and open its material.','Change its base color and roughness.','Add a light above and to one side.','Preview the scene and soften harsh shadows.'],'Real objects are rarely perfectly shiny.','MATTE: high roughness\nMETAL: low roughness\nLIGHT: warm','Make one object look like wood and another like polished metal.'],
      ['Add interaction','Make an object respond to a viewer.','An interaction connects a trigger, such as a click, to an action, such as opening, moving, or showing information.',['Select the object to control.','Choose a click trigger.','Add a rotate or show action.','Preview and test the interaction.'],'Give the viewer a visual clue about clickable objects.','ON CLICK → ROTATE 90°\nON HOVER → HIGHLIGHT','Create a virtual display where clicking an object turns it and reveals one fact.']]
  },
  khanacademy: {
    name: 'Khan Academy Computing', icon: 'academy', color: '#1677ff', pale: '#edf5ff', age: '10–16', level: 'Beginner', group: 'explorer', short: 'Draw, animate, and build webpages with guided coding lessons.', intro: 'Learn programming step by step with instant visual feedback and friendly challenges.',
    about: 'Khan Academy Computing offers free, guided lessons in programming, animation, web design, and computer science. Its editor shows the result beside your code, so you can experiment and learn immediately. It encourages mastery: practise, notice feedback, improve, and try again.', examples: [['art','Digital art','Use code and coordinates to draw pictures.'],['web','Web pages','Combine HTML and CSS to publish information.'],['data','Data stories','Use visual information to explain a pattern.']], video: 'HjJw8Py6nJw',
    lessons: [
      ['Draw with code','Use coordinates, shapes, and colors on a canvas.','A canvas is a drawing area. Coordinates tell the computer exactly where to place each shape.',['Create a circle at x 100, y 100.','Change its width and height.','Add a fill color before the shape.','Move one number and observe the result.'],'Change one value at a time so you know what it controls.','fill(255, 190, 60);\nellipse(100, 100, 80, 80);','Draw a robot face using rectangles, circles, and at least three colors.'],
      ['Make it move','Change a property a little during every frame.','Animation is many still pictures shown quickly. A draw loop creates a new frame again and again.',['Create a variable named x.','Draw a shape at position x.','Inside the draw loop, add 2 to x.','Reset x when it leaves the canvas.'],'Small changes make smooth movement.','x = x + 2;\nellipse(x, 100, 30, 30);','Animate a ball moving across the screen. Add a second moving shape.'],
      ['Create a web page','Structure information with basic HTML tags.','HTML gives content meaning. Headings, paragraphs, images, and lists are building blocks of a webpage.',['Write an h1 heading.','Add a paragraph below it.','Create a list with three items.','Use CSS to change one color.'],'Close tags carefully and keep indentation tidy.','<h1>My Planet</h1>\n<p>A world of ideas.</p>','Make a one-page guide to your favorite animal or planet.']]
  },
  javascript: {
    name: 'JavaScript', icon: 'brackets', color: '#00a8ff', pale: '#eaf8ff', age: '13–17', level: 'Intermediate', group: 'creator', short: 'Make websites interactive with a real programming language.', intro: 'Write clear code that calculates, decides, repeats, and responds to people.',
    about: 'JavaScript is a programming language created in 1995 to make web pages interactive. Today it powers buttons, games, maps, servers, and many mobile apps. It is a useful first typed language because you can run it directly in a web browser and see results quickly.', examples: [['shops','Online shops','Update a basket and calculate its total.'],['maps','Interactive maps','Respond to searches, clicks, and zooming.'],['media','Media players','Control play, pause, volume, and playlists.']], video: 'W6NZfCO5SIk',
    lessons: [
      ['Variables & values','Store and update text, numbers, and true/false values.','A variable is a labeled place in memory. Use const for a value that stays the same and let for one that changes.',['Open the browser console.','Create const name = "Mia".','Create let score = 0.','Add 10 to score and print it.'],'Choose names that describe what the value means.','const player = "Mia";\nlet score = 0;\nscore = score + 10;','Store your name, age, and favorite subject, then print one friendly sentence.'],
      ['Decisions with if','Run different code when a condition is true or false.','A condition is a question with a true or false answer. An if statement lets a program choose a path.',['Create a number called temperature.','Check whether it is greater than 30.','Print “Stay cool” when true.','Add an else message for other days.'],'Use === when checking whether two values are equal.','if (score >= 10) {\n console.log("Level up!");\n} else { console.log("Keep going"); }','Write a program that gives a different message for morning, afternoon, or evening.'],
      ['Events & the page','Make an HTML button respond to a click.','The DOM is the browser’s model of a webpage. JavaScript can find an element and change it when an event happens.',['Add a button with an id.','Find it with document.querySelector.','Listen for the click event.','Change a heading’s text or color.'],'Keep HTML, CSS, and JavaScript in separate files as projects grow.','button.addEventListener("click", () => {\n title.textContent = "You did it!";\n});','Build a button that switches a page between day and night colors.']]
  },
  python: {
    name: 'Python', icon: 'terminal', color: '#1268f3', pale: '#edf4ff', age: '12–17', level: 'Beginner', group: 'creator', short: 'Learn a clear, powerful language used in science, apps, and AI.', intro: 'Start typed programming with readable commands, useful data, and fun mini-projects.',
    about: 'Python is a programming language first released by Guido van Rossum in 1991. It was designed to be readable, so its code often looks close to English. Python is used for websites, automation, science, data, robotics, and artificial intelligence.', examples: [['science','Science','Analyze experiment results and create models.'],['ai','Artificial intelligence','Train systems to recognize useful patterns.'],['automation','Automation','Ask a computer to complete repetitive jobs.']], video: '_uQrJ0TkZlc',
    lessons: [
      ['Your first program','Print messages and understand code order.','Python follows instructions from top to bottom. The print function displays information on the screen.',['Open a Python editor.','Type print("Hello, creator!").','Run the program.','Add a second print line with your name.'],'Quotation marks tell Python that words are text.','print("Hello, creator!")\nprint("I am learning Python.")','Create a three-line welcome message for a tiny adventure game.'],
      ['Variables & input','Remember information and ask the user a question.','Variables store values. The input function pauses and collects text typed by a user.',['Ask for a name with input.','Store the answer in a variable.','Join it to a greeting.','Print the completed greeting.'],'Python variable names cannot contain spaces. Use underscores instead.','name = input("Your name? ")\nprint("Welcome, " + name)','Create a program that asks for a favorite color and hobby, then responds.'],
      ['Loops make patterns','Repeat an action with a for loop.','A for loop visits each value in a sequence. Indented code below the loop repeats.',['Write for number in range(5):','Press Enter and indent the next line.','Print number inside the loop.','Run it and inspect 0 through 4.'],'Indentation is part of Python’s grammar, so line things up carefully.','for number in range(5):\n    print("Round", number)','Use a loop to count down or print a five-line star pattern.']]
  },
  arduino: {
    name: 'Arduino Electronics', icon: 'chip', color: '#00a4c8', pale: '#e9faff', age: '12–17', level: 'Explorer', group: 'creator', short: 'Connect code, circuits, sensors, and real-world inventions.', intro: 'Make lights blink, read sensors, and build inventions with a tiny programmable board.',
    about: 'Arduino is an open-source electronics platform launched in Italy in 2005. An Arduino board is a tiny computer called a microcontroller. It can read inputs from buttons and sensors, then control outputs such as lights, sounds, and motors. It makes code physical and visible.', examples: [['gardens','Smart gardens','Measure soil moisture and water a plant.'],['alarms','Safety alarms','Sense smoke, motion, or an open door.'],['robots','Robots','Read distance sensors and control motors.']], video: 'nL34zDTPkcs',
    lessons: [
      ['Meet the circuit','Identify a board, LED, resistor, and breadboard.','A circuit is a complete path for electric current. Components must be connected correctly and safely.',['Find the 5V, GND, and digital pins.','Place an LED across separate breadboard rows.','Connect a resistor to the LED’s long leg.','Connect only with power turned off.'],'LEDs have direction. The longer leg is usually positive.','PIN 13 → RESISTOR → LED → GND','Draw a safe LED circuit and label the path from output pin to ground.'],
      ['Blink an LED','Use setup, loop, and digital output.','The setup function runs once. The loop function repeats while the board has power.',['Set LED_BUILTIN as OUTPUT in setup.','Write HIGH to turn it on.','Wait with delay.','Write LOW and wait again.'],'A delay of 1000 means 1000 milliseconds, or one second.','void loop() {\n digitalWrite(LED_BUILTIN, HIGH);\n delay(1000);\n digitalWrite(LED_BUILTIN, LOW);\n delay(1000);\n}','Change the timing to create your own light signal pattern.'],
      ['Read a sensor','Turn an input value into a useful response.','Sensors measure the world. An analog reading is a number that changes with light, temperature, or another condition.',['Connect a light sensor to an analog pin.','Read it with analogRead.','Print the value to the Serial Monitor.','Use an if statement to turn on an LED when it is dark.'],'Test several readings before choosing your threshold.','light = analogRead(A0);\nif (light < 300) { LED ON; }','Plan a night-light that switches on automatically when the room gets dark.']]
  }
};

/* Week 1 recap: short, visual explanations keep this detailed beginner lesson
   readable when projected. Borrowed demonstrations always link to their source. */
courses.thinkercad.slides = [
  {section:'Week 1 recap', title:'Tinkercad for Beginners', lead:'Let’s remember the big ideas, then practise every tool together.', type:'cover', icon:'cube', prompt:'Today’s mission: look, place, size, lift, rotate, and combine!'},
  {section:'Week 1 recap', title:'Our learning map', type:'goals', bullets:['Tell the difference between 2D and 3D','Connect Tinkercad models to real 3D printing','Navigate with a mouse or touchpad','Create, resize, lift, rotate, and combine shapes'], prompt:'Show one finger for “new” and five for “I can teach it.”'},
  {section:'Big ideas', title:'2D means flat', lead:'A 2D shape has width and height, but no real depth.', type:'compare', items:[['rectangle','Rectangle','book page'],['circle','Circle','drawing'],['triangle','Triangle','road sign']], prompt:'Trace a flat shape in the air with one finger.'},
  {section:'Big ideas', title:'3D means solid', lead:'A 3D object has width, depth, and height. We can look around it.', type:'compare', items:[['cube','Cube','toy block'],['sphere','Sphere','football'],['cylinder','Cylinder','can']], prompt:'Which object can roll? Which can stack?'},
  {section:'Big ideas', title:'2D or 3D?', type:'versus', items:[['2D','flat','width + height','image'],['3D','solid','width + depth + height','package']], prompt:'A photo of a ball is 2D; the ball in your hand is 3D.'},
  {section:'Meet Tinkercad', title:'How Tinkercad connects to 3D', lead:'Tinkercad is our digital building table. It stores a model’s shape and measurements.', type:'flow', items:[['idea','Imagine'],['cursor','Build in Tinkercad'],['search','Check every side'],['printing','Make it real']], prompt:'The model is instructions; the printer follows those instructions.'},
  {section:'Meet Tinkercad', title:'Why use Tinkercad?', type:'goals', bullets:['Build quickly with simple digital blocks','Test an idea without wasting material','Learn size, position, rotation, and problem-solving','Prepare printable models in a beginner-friendly browser tool'], prompt:'There is no “wrong” first idea—only a next version.'},
  {section:'3D printing', title:'Ideas people turn into objects', lead:'A model can be useful, playful, or both.', type:'image', image:'../images/tinkercad-applications-slide.png', alt:'Examples of a name tag, house, robot part, and plant pot', caption:'Class examples: name tag • house • robot part • plant pot'},
  {section:'3D printing', title:'How does 3D printing work?', lead:'A printer builds a real object one very thin layer at a time.', type:'layers', items:[['1','Design','make the 3D model'],['2','Slice','turn it into thin layers'],['3','Print','build from bottom to top']], prompt:'Imagine stacking hundreds of paper-thin pancakes.'},
  {section:'3D printing', title:'Where is 3D printing used?', type:'compare', items:[['school','Education','models and prototypes'],['health','Healthcare','anatomy and surgical models'],['factory','Engineering','tools and test parts'],['building','Architecture','scale buildings'],['rocket','Aerospace','lightweight parts'],['art','Art & fashion','custom creations']], prompt:'Which application could help your community?'},
  {section:'Get started', title:'Sign in safely', type:'steps', bullets:['Open tinkercad.com and choose “Sign in”','Use the teacher’s class link/nickname, Google sign-in, or your approved Autodesk account','Choose “3D Designs” → “Create new design”','Rename the design so you can find it next time'], note:'Never put a real password in slides, chat, or a shared document. Ask an adult before creating a personal account.', prompt:'Write down only the class link and your nickname—not a password.'},
  {section:'Get started', title:'Keep learning by yourself', type:'goals', bullets:['Open Tinkercad’s Learn page and choose a guided 3D Design tutorial','Pause after each step and copy it in your own design','Use Undo, then try the step again without looking','Save with a clear name: date + project + version'], prompt:'Try “Place It,” “View It,” or another beginner starter lesson.'},
  {section:'Workspace', title:'Tour the workspace', lead:'Find these areas before touching a shape.', type:'image', image:'../images/tinkercad-workspace-slide.png', alt:'Tinkercad-style workspace showing the shapes panel, workplane, toolbar, ViewCube, and view controls', caption:'Workplane • Shapes panel • Toolbar • ViewCube • Zoom and Home controls'},
  {section:'Workspace', title:'The workplane is your floor', lead:'The blue grid is the surface where your model begins.', type:'workplane', bullets:['Drag a shape onto the grid','Look from the side—not only the top','Check that the bottom touches the plane','Press D to drop a selected shape onto the active workplane'], prompt:'Position 0 mm means the shape is sitting on the active workplane.'},
  {section:'Workspace', title:'Floating, sitting, or drowning?', type:'levels', items:[['↑','Floating','positive height above the plane'],['0','Sitting','bottom touches the plane'],['↓','Drowning','part is below the plane']], prompt:'Side view reveals mistakes that top view can hide.'},
  {section:'Shapes', title:'Create your first shape', type:'steps', bullets:['Open “Basic Shapes” in the Shapes panel','Find Box—or type its name in Search','Drag it with the mouse or one-finger touchpad drag','Release it on the workplane and wait for the handles'], prompt:'Place one box, one cylinder, and one roof.'},
  {section:'Shapes', title:'Explore the Shapes panel', lead:'A category is like a labelled toy box.', type:'compare', items:[['box','Basic Shapes','boxes, cylinders, roofs'],['text','Text & Numbers','letters and labels'],['character','Characters','people and creatures'],['search','Search','find a shape by name']], prompt:'If you cannot see it, scroll the panel or search.'},
  {section:'Shapes', title:'Select, deselect, and delete', type:'steps', bullets:['Click or tap once to select one shape','Shift-click more shapes for a multi-selection','Click empty workplane space to deselect everything','Press Delete or Backspace to remove selected shapes'], prompt:'Place three shapes, select only the middle one, then delete it.'},
  {section:'View controls', title:'Why is it called the ViewCube?', lead:'It changes your view—not your model. Its faces match the sides of a cube.', type:'cube', items:[['FACE','front, back, left, right'],['TOP/BOTTOM','look straight down or up'],['EDGE','see two sides'],['CORNER','see three sides']], prompt:'Clicking the ViewCube never rotates the selected shape.'},
  {section:'View controls', title:'ViewCube directions', type:'compare', items:[['TOP','Top','check layout'],['BOTTOM','Bottom','check the underside'],['LEFT/RIGHT','Sides','check depth'],['FRONT/BACK','Ends','check height'],['↖ ↗','Top corners','top-left / top-right'],['↙ ↘','Bottom corners','bottom-left / bottom-right']], prompt:'Corners give a useful 3D view; faces give an exact straight view.'},
  {section:'View controls', title:'Mouse controls', type:'controls', items:[['cursor','Left click / drag','select or move a shape'],['orbit','Right-button drag','orbit around the model'],['zoom','Scroll wheel','zoom in or out'],['pan','Middle-button drag','slide the camera']], prompt:'Move the camera first; make sure you are not accidentally moving the shape.'},
  {section:'View controls', title:'Touchpad controls', type:'controls', items:[['cursor','One-finger click / drag','select or move'],['orbit','Two-finger secondary-click drag','orbit; setup can vary'],['zoom','Two-finger pinch or scroll','zoom'],['pan','Shift + secondary drag','pan in many browser setups']], note:'Trackpad gestures depend on the computer settings. The ViewCube and on-screen +/−/Home buttons are the reliable backup.', prompt:'Practise reaching top, front, and corner views without moving the box.'},
  {section:'View controls', title:'Zoom, Home, and Fit view', type:'controls', items:[['zoom','＋ / − buttons','zoom without gestures'],['home','Home button','return to the default whole-workplane view'],['F','F key','fit selected object(s) in view'],['search','ViewCube','choose an exact direction']], prompt:'Select a tiny shape and press F. Then use Home to find the whole scene again.'},
  {section:'Transform', title:'Meet the shape handles', lead:'Select a shape and read its handles before dragging.', type:'compare', items:[['□','White corner dots','resize two directions'],['■','Black side dots','resize one direction'],['▲','Black cone','lift or lower'],['↻','Curved double arrows','rotate around an axis']], prompt:'Point to a handle and predict what will change.'},
  {section:'Transform', title:'Screenshot demo: exact resizing', lead:'Tinkercad shows measurement boxes while a handle is active.', type:'image', image:'https://cuperman007.github.io/codeclub/learn/tinkercad/tutorials/beginner/images/resize-box.png', fallback:'../images/tinkercad-workspace-slide.png', alt:'A real Tinkercad screenshot showing a box resized with numeric measurements', caption:'Reference demo: resize a box to exact millimetres.', source:'https://cuperman007.github.io/codeclub/learn/tinkercad/tutorials/beginner/create-a-house/'},
  {section:'Transform', title:'White dots: resize two directions', type:'steps', bullets:['Drag a white corner square to change width and depth together','Watch both measurement labels','Hold Shift when you want proportional scaling','Click a number, type an exact size, and press Enter'], prompt:'Make a square base: 30 mm × 30 mm.'},
  {section:'Transform', title:'Black dots: resize one direction', type:'steps', bullets:['Drag a black side handle to change only width or depth','Use the black top square to change height','Watch which single measurement changes','Type a number when accuracy matters more than dragging'], note:'Do not confuse the black resize handles with the black cone/triangle above the shape—the cone changes position, not size.', prompt:'Change only the height of your base to 8 mm.'},
  {section:'Transform', title:'Type the size you need', type:'controls', items:[['30','Width','left ↔ right'],['20','Depth','front ↔ back'],['10','Height','bottom ↕ top'],['Enter','Confirm','apply the number']], prompt:'Try 30 × 20 × 10 mm, then check it from three views.'},
  {section:'Transform', title:'Lift and lower with the black cone', lead:'The black cone controls the shape’s distance above or below the active workplane.', type:'levels', items:[['+5 mm','Floating','above the grid'],['0 mm','Sitting','on the grid'],['−2 mm','Drowning','below the grid']], prompt:'Type 0 beside the cone—or press D—to return the shape to the workplane.'},
  {section:'Transform', title:'Screenshot demo: lifting a roof', lead:'The height label tells us how far the shape sits above the workplane.', type:'image', image:'https://cuperman007.github.io/codeclub/learn/tinkercad/tutorials/beginner/images/move-roof-up.gif', fallback:'../images/tinkercad-workspace-slide.png', alt:'A real Tinkercad animation showing a roof lifted with the black cone handle', caption:'Reference demo: lift the roof until it sits on the walls.', source:'https://cuperman007.github.io/codeclub/learn/tinkercad/tutorials/beginner/create-a-house/'},
  {section:'Transform', title:'Rotate with the double-arrow handles', lead:'Three curved handles turn a shape around three different axes.', type:'rotate', items:[['0°','start'],['45°','diagonal'],['90°','quarter turn']], prompt:'Choose the handle whose circular guide faces the direction you need.'},
  {section:'Transform', title:'Inside or outside the rotate circle?', type:'versus', items:[['INSIDE','quick snap','larger angle steps','45°'],['OUTSIDE','fine control','1-degree steps','17°']], note:'You can also click the angle label, type an exact number, and press Enter.', prompt:'Make 45° quickly, then make an exact 17° turn.'},
  {section:'Transform', title:'Undo is your time machine', type:'undo', items:[['Oops!','A shape moved'],['⌘ Z / Ctrl Z','Undo'],['All good','Try again']], prompt:'Mac uses Command + Z; Windows/Chromebook usually uses Ctrl + Z.'},
  {section:'Precision', title:'Snap Grid is like step size', lead:'An adult takes bigger steps; a child takes smaller steps. Snap Grid chooses the model’s step size.', type:'snap', items:[['1.0 mm','adult steps','move quickly'],['0.5 mm','everyday steps','balanced control'],['0.1 mm','tiny child steps','fine detail']], prompt:'Big steps are faster; tiny steps are more precise.'},
  {section:'Precision', title:'Use Snap Grid wisely', type:'steps', bullets:['Open Snap Grid at the bottom-right of the workspace','Choose 1.0 mm for quick beginner building','Switch to 0.5 or 0.1 mm for small corrections','Use keyboard arrow keys to move by the chosen snap amount'], prompt:'Move a box three arrow-key steps at 1.0 mm, then repeat at 0.1 mm.'},
  {section:'Combine', title:'Bundle: make parts travel together', lead:'Select several separate solids and choose Group. They become one selectable object.', type:'equation', items:[['wheel','Wheel'],['＋','+'],['package','Body'],['＝','='],['car','Toy car bundle']], prompt:'Like putting loose crayons into one pencil case: the parts stay arranged and move together.'},
  {section:'Combine', title:'Union: join overlapping solids', lead:'When solid shapes overlap and you Group them, their material joins into one combined form.', type:'equation', items:[['box','Box'],['＋','overlap'],['roof','Roof'],['＝','Group'],['home','One house']], prompt:'Like two soft clay pieces pressed together: overlap first, then Group.'},
  {section:'Combine', title:'Intersection: keep only the shared part', lead:'Intersection means the small region where two shapes overlap.', type:'versus', items:[['A + B','Union','keep all solid material','combine'],['A ∩ B','Intersection','keep only shared material','search']], note:'Standard Tinkercad has Group/Union and Hole/Subtract, but no one-click Intersect button. Building an intersection needs extra duplicate-and-hole steps, so treat it as an advanced idea.', prompt:'Hold two paper circles together and point to only their overlapping area.'},
  {section:'Combine', title:'Hole: cut material away', lead:'Turn one shape into a Hole, overlap it with a Solid, select both, then Group.', type:'equation', items:[['▰','Solid'],['−','−'],['◌','Hole'],['＝','='],['▣','Opening']], prompt:'Think of a cookie cutter removing dough.'},
  {section:'Precision', title:'Cruise: let shapes hug a surface', lead:'Select a shape, turn on the magnet-shaped Cruise tool, then drag its Cruise control onto another surface.', type:'steps', bullets:['Select the shape you want to place','Click the magnet-shaped Cruise button','Drag the circular Cruise control toward a target shape','Release when it snaps onto the surface; resize or rotate while it stays attached'], note:'Cruise moves a shape onto another shape’s surface. It does not permanently group the shapes.', prompt:'Cruise a small window onto the wall of a house.'},
  {section:'Create', title:'Mini project: build a house', type:'project', image:'https://cuperman007.github.io/codeclub/learn/tinkercad/tutorials/beginner/images/add-door.gif', fallback:'../images/tinkercad-workspace-slide.png', alt:'A real Tinkercad animation showing a door hole grouped with a house wall', bullets:['1 box for the walls','1 roof lifted onto the walls','2 window holes','1 door hole','Check every side → Group'], caption:'Reference demo: overlap a Hole and Group it to cut the door.', source:'https://cuperman007.github.io/codeclub/learn/tinkercad/tutorials/beginner/create-a-house/'},
  {section:'Review', title:'Week 1 toolkit complete!', type:'review', bullets:['2D is flat; 3D adds depth','The workplane is the model’s floor','ViewCube and camera controls change only your view','Handles resize, lift, and rotate','Group joins solids; Hole cuts; Cruise places on surfaces'], prompt:'Exit ticket: demonstrate one tool and explain one safety rule.'}
];

function iconSVG(name) {
  const paths = {
    cube: '<path d="m12 2 8 4.5v11L12 22l-8-4.5v-11L12 2Z"/><path d="m4 6.5 8 4.5 8-4.5M12 11v11"/>',
    blocks: '<rect x="3" y="4" width="8" height="7" rx="2"/><rect x="13" y="13" width="8" height="7" rx="2"/><path d="M11 7.5h3a3 3 0 0 1 3 3V13M13 16.5h-3a3 3 0 0 1-3-3V11"/>',
    cursor: '<path d="m5 3 14 9-6 2-3 6L5 3Z"/><path d="m13 14 5 5"/>',
    nodes: '<circle cx="5" cy="12" r="3"/><circle cx="19" cy="5" r="3"/><circle cx="19" cy="19" r="3"/><path d="m8 11 8-5M8 13l8 5"/>',
    orbit: '<circle cx="12" cy="12" r="3"/><ellipse cx="12" cy="12" rx="10" ry="5"/><ellipse cx="12" cy="12" rx="5" ry="10" transform="rotate(45 12 12)"/>',
    academy: '<path d="m3 9 9-5 9 5-9 5-9-5Z"/><path d="M7 12v5c3 2 7 2 10 0v-5M21 9v6"/>',
    brackets: '<path d="m8 5-5 7 5 7M16 5l5 7-5 7M14 3l-4 18"/>',
    terminal: '<rect x="2" y="4" width="20" height="16" rx="3"/><path d="m7 9 3 3-3 3m6 0h4"/>',
    chip: '<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 1v5m6-5v5M9 18v5m6-5v5M1 9h5m-5 6h5m12-6h5m-5 6h5M10 10h4v4h-4z"/>',
    spark: '<path d="m12 2 1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7L12 2Z"/><path d="m19 16 .7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z"/>',
    grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
    link: '<path d="M10 13a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7-7l-1.2 1.2M14 11a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7 7l1.2-1.2"/>',
    idea: '<path d="M9 18h6m-5 3h4M8.5 14.5a7 7 0 1 1 7 0C14.5 15.3 14 16 14 18h-4c0-2-.5-2.7-1.5-3.5Z"/>',
    pencil: '<path d="m4 20 4.2-1 10.9-10.9a2.1 2.1 0 0 0-3-3L5.2 16 4 20Z"/><path d="m14.8 6.4 3 3M5.2 16l3 3"/>',
    build: '<path d="m14 6 4-4 4 4-4 4M18 6 9 15"/><path d="m11 13 3 3-6 6-3-3 6-6ZM3 7l4-4 4 4-4 4-4-4Z"/>',
    search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5M8 10.5l1.7 1.7L13 9"/>',
    rectangle: '<rect x="3" y="6" width="18" height="12" rx="2"/>',
    circle: '<circle cx="12" cy="12" r="9"/>',
    triangle: '<path d="m12 3 9 17H3L12 3Z"/>',
    sphere: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
    cylinder: '<ellipse cx="12" cy="5" rx="7" ry="3"/><path d="M5 5v14c0 1.7 3.1 3 7 3s7-1.3 7-3V5M5 18c0 1.7 3.1 3 7 3s7-1.3 7-3"/>',
    image: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m4 17 5-5 4 4 3-3 5 5"/>',
    package: '<path d="m12 2 9 5-9 5-9-5 9-5ZM3 7v10l9 5 9-5V7M12 12v10"/>',
    resize: '<path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5M3 8l6 6M21 8l-6 6M3 16l6-6M21 16l-6-6"/>',
    combine: '<rect x="3" y="7" width="10" height="10" rx="2"/><rect x="11" y="3" width="10" height="10" rx="2"/><path d="M13 11h3m-1.5-1.5v3"/>',
    rocket: '<path d="M14 4c3-2 6-1 7-1 0 1 1 4-1 7l-5 5-6-6 5-5ZM9 10l-5 2-2 4 7 1m5-5 1 7 4-2 2-5M8 19l-4 2 2-4"/>',
    school: '<path d="m3 9 9-6 9 6-9 5-9-5Z"/><path d="M6 12v7h12v-7M10 19v-4h4v4"/>',
    health: '<path d="M12 21s-8-4.8-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 6.2-8 11-8 11Z"/><path d="M12 9v6M9 12h6"/>',
    factory: '<path d="M3 21V9l6 4V9l6 4V6h6v15H3Z"/><path d="M7 17h2m3 0h2m3 0h2M17 3h3v3"/>',
    building: '<path d="M5 21V5l7-3 7 3v16M2 21h20M9 7h2m2 0h2M9 11h2m2 0h2M9 15h2m2 0h2M11 21v-3h2v3"/>',
    zoom: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5M10.5 7v7M7 10.5h7"/>',
    pan: '<path d="M8 11V6a2 2 0 0 1 4 0v4-6a2 2 0 0 1 4 0v6-4a2 2 0 0 1 4 0v8c0 5-3 8-8 8h-1c-3 0-5-2-7-5l-2-3a2 2 0 0 1 3-2l3 3"/>',
    box: '<path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z"/><path d="m4 7.5 8 4.5 8-4.5M12 12v9"/>',
    cone: '<ellipse cx="12" cy="19" rx="8" ry="3"/><path d="M4 19 12 3l8 16"/>',
    roof: '<path d="M3 13 12 4l9 9v7H3v-7Z"/><path d="M8 20v-6h8v6"/>',
    pyramid: '<path d="m12 3 9 17H3L12 3Z"/><path d="m12 3 3 17M3 20h18"/>',
    home: '<path d="m3 11 9-8 9 8v10h-7v-6h-4v6H3V11Z"/>',
    model: '<path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z"/><path d="m4 7.5 8 4.5 8-4.5M12 12v9M8 5.2l8 4.6"/>',
    graduation: '<path d="m3 9 9-5 9 5-9 5-9-5Z"/><path d="M7 12v5c3 2 7 2 10 0v-5M21 9v7"/>',
    cloud: '<path d="M7 19h11a4 4 0 0 0 .5-8A6.5 6.5 0 0 0 6 9.5 4.8 4.8 0 0 0 7 19Z"/><path d="m9 14 3-3 3 3M12 11v7"/>',
    badge: '<path d="m12 3 2 2.2 3-.3.7 2.9 2.6 1.5-1.2 2.7 1.2 2.7-2.6 1.5-.7 2.9-3-.3L12 21l-2-2.2-3 .3-.7-2.9-2.6-1.5L4.9 12 3.7 9.3l2.6-1.5L7 4.9l3 .3L12 3Z"/><path d="m9 12 2 2 4-4"/>',
    check: '<circle cx="12" cy="12" r="9"/><path d="m8 12 2.5 2.5L16 9"/>'
  };
  return `<svg viewBox="0 0 24 24" aria-hidden="true">${paths[name] || paths.spark}</svg>`;
}

const demoIconNames = new Set(['cube','idea','pencil','build','search','rectangle','circle','triangle','sphere','cylinder','image','package','cursor','resize','combine','rocket','school','health','factory','building','orbit','zoom','pan','box','cone','roof','pyramid','home','model','graduation','cloud','badge','check','spark']);
function demoMark(value) { return demoIconNames.has(value) ? iconSVG(value) : value; }
function hydrateDemoIcons() {
  document.querySelectorAll('[data-demo-icon]').forEach(node => { node.innerHTML = iconSVG(node.dataset.demoIcon); });
}

function renderHome() {
  const grid = document.querySelector('#course-grid');
  if (!grid) return;
  grid.innerHTML = Object.entries(courses).map(([slug, c], i) => `
    <article class="course-card" data-group="${c.group}">
      <div class="course-visual" style="--card-bg:${c.pale};--course-color:${c.color}"><span class="course-number">COURSE ${String(i + 1).padStart(2,'0')}</span><span class="course-visual-grid"></span><span class="course-icon">${iconSVG(c.icon)}</span><span class="visual-ring"></span></div>
      <div class="course-body"><h3>${c.name}</h3><p>${c.short}</p><div class="course-meta"><span>Ages ${c.age}</span><span>${c.level}</span></div><a class="course-link" href="courses/${slug}.html">Start learning <span>→</span></a></div>
    </article>`).join('');
  document.querySelectorAll('.course-filters button').forEach(button => button.addEventListener('click', () => {
    document.querySelector('.course-filters .active').classList.remove('active'); button.classList.add('active');
    document.querySelectorAll('.course-card').forEach(card => card.hidden = button.dataset.filter !== 'all' && card.dataset.group !== button.dataset.filter);
  }));
}

function courseDeck(c) {
  if (c.slides) return c.slides;
  const deck = [{section:'Welcome', title:c.name, lead:c.intro, type:'cover', icon:c.icon, prompt:'Learn by making something you can be proud of.'}];
  deck.push({section:'Start here', title:'What is ' + c.name + '?', lead:c.about, type:'compare', items:c.examples.map(e => ['✦',e[1],e[2]]), prompt:'Choose one real-life use that interests you.'});
  c.lessons.forEach((l, i) => deck.push({section:'Lesson ' + (i + 1), title:l[0], lead:l[1], type:'lesson', bullets:l[3], note:l[4], demo:l[5], prompt:l[6]}));
  return deck;
}

function renderSlideVisual(slide) {
  const items = slide.items || [];
  const bullets = slide.bullets || [];
  if (slide.type === 'cover') return '<div class="cover-visual"><span>' + iconSVG(slide.icon || 'spark') + '</span><i></i><i></i></div>';
  if (slide.type === 'image') return '<figure class="slide-photo"><img src="' + slide.image + '" alt="' + slide.alt + '"' + (slide.fallback ? ' onerror="this.onerror=null;this.src=\'' + slide.fallback + '\'"' : '') + '><figcaption>' + slide.caption + (slide.source ? ' <a href="' + slide.source + '" target="_blank" rel="noreferrer">View example source ↗</a>' : '') + '</figcaption></figure>';
  if (slide.type === 'project') return '<div class="project-grid"><figure class="slide-photo"><img src="' + slide.image + '" alt="' + slide.alt + '" onerror="this.onerror=null;this.src=\'' + slide.fallback + '\'"><figcaption>' + slide.caption + ' <a href="' + slide.source + '" target="_blank" rel="noreferrer">Tutorial source ↗</a></figcaption></figure><ol class="project-list">' + bullets.map(x => '<li>' + x + '</li>').join('') + '</ol></div>';
  if (slide.type === 'goals' || slide.type === 'steps' || slide.type === 'review') return '<div class="slide-bullets ' + slide.type + '">' + bullets.map((x,i) => '<div><span>' + (slide.type === 'steps' ? i + 1 : iconSVG(slide.type === 'review' ? 'check' : 'spark')) + '</span><p>' + x + '</p></div>').join('') + '</div>';
  if (slide.type === 'lesson') return '<div class="lesson-presentation"><ol class="project-list">' + bullets.map(x => '<li>' + x + '</li>').join('') + '</ol><pre>' + slide.demo + '</pre></div>';
  if (slide.type === 'workplane') return '<div class="workplane-demo"><div class="demo-cube"></div><span>0 mm — sitting safely on the grid</span></div>';
  if (slide.type === 'cube') return '<div class="viewcube-demo"><div class="demo-cube"></div>' + items.map(x => '<span><b>' + x[0] + '</b>' + x[1] + '</span>').join('') + '</div>';
  if (slide.type === 'layers') return '<div class="layers-demo">' + items.map(x => '<div><span>' + x[0] + '</span><b>' + x[1] + '</b><small>' + x[2] + '</small></div>').join('') + '<div class="printed-shape">' + iconSVG('model') + '</div></div>';
  if (slide.type === 'undo') return '<div class="undo-demo">' + items.map((x,i) => '<div><span>' + x[0] + '</span><small>' + x[1] + '</small></div>' + (i < items.length-1 ? '<b>→</b>' : '')).join('') + '</div>';
  return '<div class="visual-cards ' + slide.type + '">' + items.map(x => '<article><span>' + demoMark(x[0]) + '</span><h3>' + x[1] + '</h3>' + (x[2] ? '<p>' + x[2] + '</p>' : '') + (x[3] ? '<i>' + demoMark(x[3]) + '</i>' : '') + '</article>').join('') + '</div>';
}

function renderCourse() {
  const root = document.querySelector('[data-course]');
  if (!root) return;
  const c = courses[root.dataset.course]; if (!c) return;
  const slides = courseDeck(c);
  let current = 0;
  document.title = c.name + ' Course | CIY Club';
  document.documentElement.style.setProperty('--course-accent', c.color);
  document.documentElement.style.setProperty('--course-pale', c.pale);
  document.querySelector('#course-hero').hidden = true;
  document.querySelector('#course-overview').hidden = true;

  const header = document.querySelector('.course-header .site-header');
  header.insertAdjacentHTML('beforeend','<div class="course-tools"><button id="outline-toggle" aria-expanded="false">☷ <span>Slides</span></button><button id="fullscreen-toggle" title="Present full screen">⛶ <span>Present</span></button></div>');
  const sidebar = document.querySelector('#lesson-list');
  sidebar.innerHTML = '<div class="outline-head"><div><small>' + c.name + '</small><h2>Slide outline</h2></div><button id="outline-close" aria-label="Close slide outline">×</button></div><div class="outline-list">' + slides.map((s,i) => '<button data-lesson="' + i + '" class="' + (i===0?'active':'') + '"><small>' + String(i+1).padStart(2,'0') + '</small><span>' + s.title + '</span></button>').join('') + '</div>';
  sidebar.insertAdjacentHTML('afterend','<button class="outline-scrim" aria-label="Close slide outline"></button>');
  const scrim = document.querySelector('.outline-scrim');
  const toggleOutline = force => {
    const open = typeof force === 'boolean' ? force : !sidebar.classList.contains('open');
    sidebar.classList.toggle('open', open); scrim.classList.toggle('open', open);
    document.querySelector('#outline-toggle').setAttribute('aria-expanded', String(open));
  };
  document.querySelector('#outline-toggle').onclick = () => toggleOutline();
  document.querySelector('#outline-close').onclick = () => toggleOutline(false);
  scrim.onclick = () => toggleOutline(false);

  const showSlide = index => {
    if (index < 0 || index >= slides.length) return;
    current = index; const s = slides[index];
    document.querySelectorAll('[data-lesson]').forEach((b,i) => b.classList.toggle('active',i===index));
    const note = s.note ? '<aside class="slide-note">' + iconSVG('idea') + '<span>' + s.note + '</span></aside>' : '';
    document.querySelector('#lesson-view').innerHTML = '<article class="presentation-stage"><div class="slide-progress"><i style="width:' + (((index+1)/slides.length)*100) + '%"></i></div><header class="presentation-title"><div><span>' + s.section + '</span><small>Slide ' + (index+1) + ' of ' + slides.length + '</small></div><h1>' + s.title + '</h1>' + (s.lead ? '<p>' + s.lead + '</p>' : '') + '</header><div class="presentation-visual">' + renderSlideVisual(s) + '</div>' + note + (s.prompt ? '<footer class="slide-prompt"><b>Try it!</b><span>' + s.prompt + '</span></footer>' : '') + '<nav class="presentation-controls" aria-label="Slide navigation"><button id="previous" ' + (index===0?'disabled':'') + ' aria-label="Previous slide">←</button><button id="counter" aria-label="Open slide outline">' + (index+1) + ' / ' + slides.length + '</button><button id="next" ' + (index===slides.length-1?'disabled':'') + ' aria-label="Next slide">→</button></nav></article>';
    document.querySelector('#previous').onclick = () => showSlide(current-1);
    document.querySelector('#next').onclick = () => showSlide(current+1);
    document.querySelector('#counter').onclick = () => toggleOutline(true);
    toggleOutline(false);
  };
  sidebar.querySelectorAll('[data-lesson]').forEach((b,i) => b.addEventListener('click',() => showSlide(i)));
  document.querySelector('#fullscreen-toggle').onclick = () => {
    const player = document.querySelector('#lesson-view');
    if (!document.fullscreenElement) player.requestFullscreen && player.requestFullscreen();
    else document.exitFullscreen && document.exitFullscreen();
  };
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight' || e.key === 'PageDown') showSlide(current+1);
    if (e.key === 'ArrowLeft' || e.key === 'PageUp') showSlide(current-1);
    if (e.key === 'Escape') toggleOutline(false);
  });
  showSlide(0);
}

function enableTheme() {
  let theme = 'light';
  try { theme = localStorage.getItem('ciy-theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'); } catch (e) {}
  const host = document.querySelector('.course-tools') || document.querySelector('.site-header nav');
  if (!host) return;
  const button = document.createElement('button');
  button.className = 'theme-toggle';
  button.type = 'button';
  button.setAttribute('aria-label','Switch color theme');
  const primaryAction = host.querySelector('.nav-cta');
  if (primaryAction) host.insertBefore(button, primaryAction); else host.appendChild(button);
  const paint = () => {
    document.documentElement.dataset.theme = theme;
    button.innerHTML = theme === 'dark' ? '<span aria-hidden="true">☀</span>' : '<span aria-hidden="true">☾</span>';
    button.setAttribute('title', theme === 'dark' ? 'Use light mode' : 'Use dark mode');
    button.setAttribute('aria-pressed', String(theme === 'dark'));
  };
  button.onclick = () => {
    theme = theme === 'dark' ? 'light' : 'dark'; paint();
    try { localStorage.setItem('ciy-theme',theme); } catch (e) {}
  };
  paint();
}

function enableHomePresentation() {
  if (document.body.classList.contains('course-page')) return;
  const slides = [...document.querySelectorAll('main > section')];
  if (!slides.length) return;
  document.body.classList.add('home-present');
  document.documentElement.classList.add('home-present-mode');
  let current = 0;
  const controls = document.createElement('nav');
  controls.className = 'home-present-controls';
  controls.setAttribute('aria-label','Home presentation controls');
  controls.innerHTML = '<button class="home-prev" aria-label="Previous section">↑</button><button class="home-count" aria-label="Current section"></button><button class="home-next" aria-label="Next section">↓</button>';
  document.body.appendChild(controls);
  const update = index => {
    current = Math.max(0, Math.min(index, slides.length - 1));
    const title = slides[current].querySelector('h1,h2');
    controls.querySelector('.home-count').textContent = String(current + 1).padStart(2,'0') + ' / ' + String(slides.length).padStart(2,'0') + (title ? '  ' + title.textContent.split('.')[0] : '');
    controls.querySelector('.home-prev').disabled = current === 0;
    controls.querySelector('.home-next').disabled = current === slides.length - 1;
  };
  const go = index => {
    const next = Math.max(0, Math.min(index, slides.length - 1));
    slides[next].scrollIntoView({behavior:'smooth',block:'start'}); update(next);
  };
  controls.querySelector('.home-prev').onclick = () => go(current - 1);
  controls.querySelector('.home-next').onclick = () => go(current + 1);
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) update(slides.indexOf(entry.target));
  }), {threshold:.56});
  slides.forEach(slide => observer.observe(slide));
  document.addEventListener('keydown', e => {
    if (['INPUT','TEXTAREA'].includes(document.activeElement.tagName)) return;
    if (e.key === 'PageDown' || e.key === 'ArrowDown') { e.preventDefault(); go(current + 1); }
    if (e.key === 'PageUp' || e.key === 'ArrowUp') { e.preventDefault(); go(current - 1); }
  });
  update(0);
}

function enableMotion() {
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.body.classList.add('motion-ready');
  const items = document.querySelectorAll('.benefit-card, .course-card, .content-section, .lesson-card, .coach-details article, .outline-slides article, .lesson-visual');
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  }), { threshold: .12, rootMargin: '0px 0px -40px' });
  items.forEach((item, index) => {
    item.classList.add('reveal-item');
    item.style.setProperty('--reveal-delay', `${(index % 3) * 80}ms`);
    observer.observe(item);
  });
}

renderHome(); renderCourse(); hydrateDemoIcons(); enableTheme(); enableHomePresentation(); enableMotion();
