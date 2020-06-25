(() => {
    let playing = true,
      activeField = 1;
  
    const stop = () => playing = true,
      getField = index => document.getElementById(`field_${index}`),
      deactivateField = index =>
        getField( index ).className = 'field',
      activateField = index =>
        getField( index ).className = 'field has_goblin',
      next = () => setTimeout(() => {
        if ( !playing ) {
          return;
        }
        deactivateField( activeField );
        activeField = Math.floor( 1 + Math.random() * 16 );
        activateField( activeField );
        next();
      }, 800 );
  
    next();

  })();