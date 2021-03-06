// @flow

import ObjectManager from '../../../../units/rb-base-server/ObjectManager'

export default class ToDo {
  id: string
  ToDo_artifact_id: string
  ToDo_user_id: string
  ToDo_Text: string
  ToDo_Complete: boolean

  constructor(fields: {
    id: string,
    ToDo_artifact_id: string,
    ToDo_user_id: string,
    ToDo_Text: string,
    ToDo_Complete: boolean,
  }) {
    this.id = fields.id
    this.ToDo_artifact_id = fields.ToDo_artifact_id
    this.ToDo_user_id = fields.ToDo_user_id
    this.ToDo_Text = fields.ToDo_Text
    this.ToDo_Complete = fields.ToDo_Complete
  }
}

ObjectManager.registerEntity('ToDo', ToDo, {})
