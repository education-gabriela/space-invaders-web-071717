class Spaceship {
  constructor(name, crewMembers, phasers, shields) {
    this.name = name
    this.crewMembers = this.addCrewMembersToShip(crewMembers)
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = 'disengaged'
    this.docked = crewMembers.length === 0 ? true : false
    this.phasersCharge = 'uncharged'
  }
  addCrewMembersToShip(crew) {
    return crew.map(member => {
      member.currentShip = this
      return member
    })
  }
}
