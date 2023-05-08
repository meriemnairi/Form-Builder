function SubmissionCard({ submission }) {
  return (
    <div className="card">
      {submission.map((subm, index) => (
        <div className="input">
          <label>{subm.title}</label>
          {subm.type === "single-choice question" ||
          subm.type === "multiple-choice question" ? (
            subm.value.map((v, index) => (
              <p key={index} className="li">
                - {v}
              </p>
            ))
          ) : subm.type === "file" ? (
            <a href={subm.value} download className="link">
              VALUE
            </a>
          ) : (
            <p>{subm.value}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default SubmissionCard;
