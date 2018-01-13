export interface NgPack {
  config: Object
  pkg: { name?: 'string'}
  actions: any
  effects: any
  reducers: any
}

export class NgPack {
  public actions
  public effects
  public reducers

/**
 * @constructor
 * @param app NgEngine instance
 * @param config The NgPack configuration (config/ folder)
 * @param actions
 * @param effects
 * @param reducers
 *
 * Instantiate the ngPack and set some initial properties. All ngPacks
 * should implement their own constructors, and call super(app, pack) with
 * their own pack definitions. Implementing application logic in the ngPack
 * constructor is not recommended.
 */

  constructor (app, {config, pkg, actions, effects, reducers}) {
    Object.defineProperties(this, {
      app: {
        enumberable: false,
        writable: false,
        value: app
      },
      config: {
        value: config,
        enumerable: false
      },
      pkg: {
        value: Object.freeze(pkg),
        writable: false,
        enumerable: false
      },
      actions: {
        value: actions,
        writable: true
      },
      effects: {
        value: effects,
        writable: true
      },
      reducers: {
        value: reducers,
        writable: true
      }
    })
  }

  /**
   * Get the ID of the pack
   * @returns {string}
   */
  get id() {
    return this.pkg.name.replace('ngPack-', '').toLowerCase()
  }

  /**
   * Get the name of the pack
   * @returns {string}
   */
  get name() {
    return this.pkg.name.replace('ngPack-', '')
  }

  /**
   * Get the type of the pack (Not Used Yet)
   * @returns {string}
   */
  get type () {
    return 'misc'
  }
}
