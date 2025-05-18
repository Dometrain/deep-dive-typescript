// No implicit returns - catches missing return statements in functions
// (Can also protect from this via explicit return types)

// @ts-ignore
function lookupPublisher(genre: "fiction" | "non-fiction") {
  if (genre === "fiction") {
    return "penguin";
  } else {
    console.log("harpercollins"); // missing return
  }
}
