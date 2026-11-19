import { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import styles from './CreateChorister.module.css'
import { errorCheck } from '../../../utils/utils';

import { createChorister } from '../../../services/choristersServices';
import logo from '../../../assets/SHKOLA_ZNAK.png';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setError } from '../../../reduxStates/store';
import Button from 'react-bootstrap/esm/Button';
import { useTranslation } from 'react-i18next';





const CreateChoristerForm = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { t } = useTranslation();


  const [formValues, setFormValues] = useState({
    firstName: '',
    surName: '',
    lastName: '',
    gender: '',
    schoolName: '',
    grade: '',
    vocalRange: '',


  });

  const [formations, setFormations] = useState({
    littleOnes: false,
    childrensChoir: false,
    burdenis: false,
    mixedChoir: false
  });




  const [errors, setErrors] = useState({
    firstName: '',
    surName: '',
    lastName: '',
    gender: '',
    schoolName: '',
    grade: '',
    formation: '',
    vocalRange: ''

  });





  const onChangeCreateChoristerFormHandler = (e) => {

    setFormValues(state => ({ ...state, [e.target.name]: e.target.value }));

  }

  const createChoristerHandler = async (e, formValues, formations) => {
    e.preventDefault();
    const choristformations = Object.keys(formations).filter(r => formations[r] === true);


    const choristerData = { ...formValues, formations: choristformations }

    try {

      if (Object.values(choristerData).some(f => f === '')) {

        throw new Error('Please check all fields')
      }
      await createChorister(choristerData);
      navigate('/choristers')


    } catch (error) {
      dispatch(setError(error.message))
    }


  }
  const errCheck = (e, criteria, pattern) => {

    setErrors((state) => ({ ...state, [e.target.name]: errorCheck(e.target.value, criteria, pattern) }));

  }

  const onChangeFormationHandler = (e) => {
    setFormations(state => ({ ...state, [e.target.name]: e.target.checked }));

  




  // const directory = Object.keys(formations).filter(r => formations[r] === true)[0];
  // const formData = new FormData();



}




return (

  <div className={styles['form-container']}>

    <div className={styles["header"]}>
      <img src={logo} alt="" />
      <h2>{t('createChorister.createChoristerForm')}</h2>
    </div>
    <form className={styles.choristerForm} onSubmit={(e) => createChoristerHandler(e, formValues, formations)}>
      <FloatingLabel
        controlId="floatingfirstName"
        label={t('createChorister.firstName')}
        className="mb-3"
      >
        <Form.Control type="text"
          name="firstName"
          onChange={onChangeCreateChoristerFormHandler}
          value={formValues.firstName}
          onBlur={(e) => errCheck(e, 3)} />
        {errors.firstName && <p className={styles['error']}>First Name should be at least 2 characters long!</p>}

      </FloatingLabel>


      <FloatingLabel controlId="floatingsurName" label={t('createChorister.surname')} className="mb-3">
        <Form.Control type="text" name='surName'
          onChange={onChangeCreateChoristerFormHandler}
          value={formValues.surName}
          onBlur={(e) => errCheck(e, 3)}
        />
        {errors.surName && <p className={styles['error']}>Surname should be 3 characters at least</p>}
      </FloatingLabel>

      <FloatingLabel controlId="floatinglastName" label={t('createChorister.lastName')} className="mb-3">
        <Form.Control type="text" name='lastName'
          onChange={onChangeCreateChoristerFormHandler}
          value={formValues.lastName}
          onBlur={(e) => errCheck(e, 5)}
        />
        {errors.surName && <p className={styles['error']}>Last name should be 5 characters at least</p>}
      </FloatingLabel>

      <div className="mb-3">

        <Form.Select aria-label="Default select example"
          name="gender"
          onChange={onChangeCreateChoristerFormHandler}
          value={formValues.gender}
        >
          <option>{t('createChorister.chooseGender')}</option>
          <option value="male">{t('createChorister.male')}</option>
          <option value="female">{t('createChorister.female')}</option>
        </Form.Select>
      </div>


      <Form.Select aria-label="Default select example"
        name="schoolName"
        onChange={onChangeCreateChoristerFormHandler}
        value={formValues.schoolName}
      >
        <option>{t('createChorister.chooseSchool')}</option>
        <option value="Ivan Vazov">{t('createChorister.ivanVazov')}</option>
        <option value="d-r Petar Beron">{t('createChorister.peterBeron')}</option>
        <option value="Hristo Botev">{t('createChorister.hristoBotev')}</option>
        <option value="Lyben Karavelov">{t('createChorister.lubenKaravelov')}</option>
        <option value="Graduated">{t('createChorister.graduated')}</option>
      </Form.Select>

      <Form.Select aria-label="Default select example"
        name="grade"
        onChange={onChangeCreateChoristerFormHandler}
        value={formValues.grade}
      >
        <option>{t('createChorister.gradeOption')}</option>
        <option value="I">I</option>
        <option value="II">II</option>
        <option value="III">III</option>
        <option value="IV">IV</option>
        <option value="V">V</option>
        <option value="VI">VI</option>
        <option value="VII">VII</option>
        <option value="VIII">VIII</option>
        <option value="IX">IX</option>
        <option value="X">X</option>
        <option value="XI">XI</option>
        <option value="XII">XII</option>
        <option value="NA">NA</option>
      </Form.Select>

      <Form.Select aria-label="Default select example"
        name="vocalRange"
        onChange={onChangeCreateChoristerFormHandler}
        value={formValues.vocalRange}
      >
        <option>{t('createChorister.vocalRange')}</option>
        <option value="soprano">{t('createChorister.soprano')}</option>
        <option value="alto">{t('createChorister.alto')}</option>
        <option value="tenor">{t('createChorister.tenor')}</option>
        <option value="baritone">{t('createChorister.baritone')}</option>
        <option value="bass">{t('createChorister.bass')}</option>
        <option value="childVoice1">{t('createChorister.childVoice1')}</option>
        <option value="childVoice2">{t('createChorister.childVoice2')}</option>
      </Form.Select>



      <div className={styles.checkboxContainer}>


        <input type="checkbox" id="littleOnes" name='littleOnes'
          checked={formations['littleOnes']}
          value={formations.littleOnes}
          onChange={onChangeFormationHandler}
        />
        <label htmlFor="littleOnes">{t('createChorister.littleOnes')}</label>

        <input type="checkbox" id="childrensChoir" name='childrensChoir'
          checked={formations['childrensChoir']}
          value={formations.childrensChoir}
          onChange={onChangeFormationHandler}
        />
        <label htmlFor="childrensChoir">{t('createChorister.childrensChoir')}</label>
        <input type="checkbox" id="burdenis" name='burdenis'

          value={formations.burdenis}
          onChange={onChangeFormationHandler}
          checked={formations['burdenis']}
        />
        <label htmlFor="burdenis">{t('createChorister.burdenis')}</label>

        <input type="checkbox" id="mixedChoir" name='mixedChoir'

          value={formations.mixedChoir}
          onChange={onChangeFormationHandler}
          checked={formations['mixedChoir']}
        />
        <label htmlFor="mixedChoir">{t('createChorister.mixedChoir')}</label>
      </div>






      <div className={styles['button-container']} >
        <Button variant="success" type='submit'>Add Chorister</Button>
        <Button as={Link} to={'/choristers'} variant="primary">Cancel</Button>
      </div>
    </form>
  </div>
)


}


export default CreateChoristerForm




