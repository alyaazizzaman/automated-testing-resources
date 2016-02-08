module.exports = Toaster;

function Toaster() {
  this.powerStatus = "off";
  this.toastingStatus = "off";
  this.power = function() {
    if (this.powerStatus === "off") {
      return this.powerStatus = "on";
    } else if (this.powerStatus === "on") {
      return this.powerStatus = "off";
    }
  };
  this.toast = function() {
    if (this.powerStatus === "off") {
      return (this.toastingStatus = "off") && (this.powerStatus = "off");
    } else if (this.powerStatus === "on") {
      if (this.toastingStatus === "off") {
        return this.toastingStatus = "on";
      } else if (this.toastingStatus === "on") {
        return this.toastingStatus = "off";
      }
    }
  };
}
