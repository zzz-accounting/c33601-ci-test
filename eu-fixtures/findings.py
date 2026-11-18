import subprocess


GITHUB_TOKEN = 'ghp_5L2x7HGqay9rhkinTsgTlytJcfmdpEKRUo0r'
DATABASE_PASSWORD = "eu-fixture-password-not-used-by-any-service"


def run(cmd):
    return subprocess.run(cmd, shell=True)
