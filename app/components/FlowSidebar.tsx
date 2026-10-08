export default function FlowSidebar() {
  const onDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    nodeType: string,
    nodeLabel: string
  ) => {
    event.dataTransfer.setData('nodeType', nodeType);
    event.dataTransfer.setData('nodeLabel', nodeLabel);
    event.dataTransfer.effectAllowed = 'move';
  };

  const itemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '12px 14px',
    marginTop: '10px',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    background: '#fff',
    cursor: 'grab',
    fontSize: '14px',
    color: '#374151',
    boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
  };

  return (
    <div
      style={{
        width: '250px',
        height: '100%',
        borderRight: '1px solid #e5e7eb',
        background: '#f9fafb',
        padding: '20px',
        boxSizing: 'border-box',
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: '20px' }}>
        <h3
          style={{
            margin: 0,
            fontSize: '18px',
            fontWeight: 600,
            color: '#111827',
          }}
        >
          Components
        </h3>

        <p
          style={{
            margin: '5px 0 0',
            fontSize: '12px',
            color: '#6b7280',
          }}
        >
          Drag components to canvas
        </p>
      </div>

      {/* Input */}
      <div
        draggable
        onDragStart={(event) =>
          onDragStart(event, 'input', 'Input')
        }
        style={itemStyle}
      >
        <div
          style={{
            width: '30px',
            height: '30px',
            borderRadius: '6px',
            background: '#eff6ff',
            color: '#2563eb',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 600,
          }}
        >
          I
        </div>

        <div>
          <div style={{ fontWeight: 500 }}>Input</div>
          <div
            style={{
              fontSize: '11px',
              color: '#9ca3af',
              marginTop: '2px',
            }}
          >
            Input data
          </div>
        </div>
      </div>

      {/* Output */}
      <div
        draggable
        onDragStart={(event) =>
          onDragStart(event, 'output', 'Output')
        }
        style={itemStyle}
      >
        <div
          style={{
            width: '30px',
            height: '30px',
            borderRadius: '6px',
            background: '#f0fdf4',
            color: '#16a34a',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 600,
          }}
        >
          O
        </div>

        <div>
          <div style={{ fontWeight: 500 }}>Output</div>
          <div
            style={{
              fontSize: '11px',
              color: '#9ca3af',
              marginTop: '2px',
            }}
          >
            Output result
          </div>
        </div>
      </div>

      {/* Condition */}
      <div
        draggable
        onDragStart={(event) =>
          onDragStart(event, 'condition', 'Condition')
        }
        style={itemStyle}
      >
        <div
          style={{
            width: '30px',
            height: '30px',
            borderRadius: '6px',
            background: '#fff7ed',
            color: '#ea580c',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 600,
          }}
        >
          ?
        </div>

        <div>
          <div style={{ fontWeight: 500 }}>Condition</div>
          <div
            style={{
              fontSize: '11px',
              color: '#9ca3af',
              marginTop: '2px',
            }}
          >
            Check condition
          </div>
        </div>
        
      </div>

      {/* Process */}
<div
  draggable
  onDragStart={(event) =>
    onDragStart(event, 'process', 'Process')
  }
  style={itemStyle}
>
  <div
    style={{
      width: '30px',
      height: '30px',
      borderRadius: '6px',
      background: '#f5f3ff',
      color: '#7c3aed',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 600,
    }}
  >
    P
  </div>

  <div>
    <div style={{ fontWeight: 500 }}>Process</div>

    <div
      style={{
        fontSize: '11px',
        color: '#9ca3af',
        marginTop: '2px',
      }}
    >
      Process data
    </div>
  </div>
</div>
    </div>
  );
}