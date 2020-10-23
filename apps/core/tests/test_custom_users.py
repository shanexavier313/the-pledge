def test_user(create_user):
    user = create_user()
    assert len(user.signup_code) == 6
