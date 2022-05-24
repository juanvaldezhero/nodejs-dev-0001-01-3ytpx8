let opts = {
  otherOps...,
  overrides: {
      gameDirectory: '', // where the game process generates folders like saves and resource packs.
      minecraftJar: '',
      versionJson: '',
      directory: '', // where the Minecraft jar and version json are located.
      natives: '', // native directory path.
      assetRoot: '',
      libraryRoot: '',
      cwd: '', // working directory of the java process.
      detached: true, // whether or not the client is detached from the parent / launcher.
      classes: [], // all class paths are required if you use this.
      minArgs: 11, // The amount of launch arguments specified in the version file before it adds the default again
      maxSockets: 2, // max sockets for downloadAsync.
      // The following is for launcher developers located in countries that have the Minecraft and Forge resource servers
      // blocked for what ever reason. They obviously need to mirror the formatting of the original JSONs / file structures.
      url: {
          meta: 'https://launchermeta.mojang.com', // List of versions.
          resource: 'https://resources.download.minecraft.net', // Minecraft resources.
          mavenForge: 'http://files.minecraftforge.net/maven/', // Forge resources.
          defaultRepoForge: 'https://libraries.minecraft.net/', // for Forge only, you need to redefine the library url
                                                               // in the version json.
          fallbackMaven: 'https://search.maven.org/remotecontent?filepath='
      },
      // The following is options for which version of ForgeWrapper MCLC uses. This allows us to launch modern Forge.
      fw: {
       baseUrl: 'https://github.com/ZekerZhayard/ForgeWrapper/releases/download/',
       version: '1.5.1',
       sh1: '90104e9aaa8fbedf6c3d1f6d0b90cabce080b5a9',
       size: 29892,
     },
     logj4ConfigurationFile: ''
  }
}
