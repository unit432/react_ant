import { connect } from 'react-redux'
import Settings from '../components/Settings'
import { updateGlobalOption } from '../actions'
import { Form } from 'antd'

const mapStateToProps = state => ({
  globalOpton: state.globalOption
})

const mapDispatchToProps = dispatch => ({
  updateGlobalOption: (options) => {
    dispatch(updateGlobalOption(options))
  }
})

const SettingPanel = connect(mapStateToProps, mapDispatchToProps)(Form.create({
  mapPropsToFields(props) {
    return {
      host: Form.createFormField({ value: props.globalOpton.host }),
      port: Form.createFormField({ value: props.globalOpton.port })
    }
  }
})(Settings))

export default SettingPanel
