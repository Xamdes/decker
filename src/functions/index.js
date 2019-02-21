function onHandleConfigAttributes(attributeName, value) {
  this.setState((state) => {
    let attributes = state.cyberdeckDataMaster.attributes;
    attributes[attributeName] = value;

    return { player: attributes };
  });
}

export { onHandleConfigAttributes };
